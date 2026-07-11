'use client';

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import config from '@/config/matrix-chat.json';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

function createMessage(
  role: Message['role'],
  content: string,
): Message {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

function createInitialMessages(): Message[] {
  return [
    createMessage('assistant', config.welcomeMessage),
  ];
}

function isValidMessage(value: unknown): value is Message {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const message = value as Partial<Message>;

  return (
    typeof message.id === 'string' &&
    typeof message.content === 'string' &&
    (message.role === 'user' ||
      message.role === 'assistant')
  );
}

export function MatrixChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] =
    useState<Message[]>(createInitialMessages);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(
        config.storageKey,
      );

      if (saved) {
        const parsed: unknown = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          const validMessages = parsed
            .filter(isValidMessage)
            .slice(-config.maxHistoryMessages);

          if (validMessages.length > 0) {
            setMessages(validMessages);
          }
        }
      }
    } catch {
      window.localStorage.removeItem(
        config.storageKey,
      );
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    window.localStorage.setItem(
      config.storageKey,
      JSON.stringify(
        messages.slice(-config.maxHistoryMessages),
      ),
    );
  }, [isReady, messages]);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [isOpen, messages, isLoading]);

  async function sendMessage(
    forcedContent?: string,
  ) {
    const content = (forcedContent ?? input).trim();

    if (!content || isLoading) {
      return;
    }

    const limitedContent = content.slice(
      0,
      config.maxMessageLength,
    );

    const userMessage = createMessage(
      'user',
      limitedContent,
    );

    const conversation = [
      ...messages,
      userMessage,
    ].slice(-config.maxHistoryMessages);

    setMessages(conversation);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: conversation.map(
            ({ role, content: messageContent }) => ({
              role,
              content: messageContent,
            }),
          ),
        }),
      });

      const payload = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      if (!response.ok || !payload.reply) {
        throw new Error(
          payload.error ?? 'Chat request failed.',
        );
      }

      setMessages((current) =>
        [
          ...current,
          createMessage(
            'assistant',
            payload.reply as string,
          ),
        ].slice(-config.maxHistoryMessages),
      );
    } catch (error) {
      console.error('Matrix chat error:', error);

      setMessages((current) =>
        [
          ...current,
          createMessage(
            'assistant',
            config.errorMessage,
          ),
        ].slice(-config.maxHistoryMessages),
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    void sendMessage();
  }

  function clearConversation() {
    const initial = createInitialMessages();

    setMessages(initial);

    window.localStorage.setItem(
      config.storageKey,
      JSON.stringify(initial),
    );
  }

  if (!config.enabled) {
    return null;
  }

  return (
    <div
      dir="rtl"
      className="fixed bottom-4 left-4 z-[100]"
    >
      {isOpen ? (
        <section className="mb-3 flex h-[min(620px,75vh)] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
          <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
            <div>
              <h2 className="text-sm font-bold text-foreground">
                {config.title}
              </h2>

              <p className="text-xs text-muted">
                {config.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearConversation}
                className="rounded-lg px-2 py-1 text-xs text-muted hover:bg-background"
              >
                {config.clearLabel}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xl text-muted hover:bg-background"
              >
                ×
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === 'user'
                    ? 'mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-foreground px-4 py-2.5 text-sm leading-6 text-background'
                    : 'ml-auto max-w-[85%] rounded-2xl rounded-br-sm border border-border bg-card px-4 py-2.5 text-sm leading-6 text-foreground'
                }
              >
                {message.content}
              </div>
            ))}

            {isLoading ? (
              <div className="ml-auto w-fit rounded-2xl border border-border bg-card px-4 py-2 text-sm text-muted">
                ...
              </div>
            ) : null}

            <div ref={bottomRef} />
          </div>

          {messages.length <= 1 ? (
            <div className="flex flex-wrap gap-2 border-t border-border p-3">
              {config.quickQuestions.map(
                (question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() =>
                      void sendMessage(question)
                    }
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground hover:bg-background"
                  >
                    {question}
                  </button>
                ),
              )}
            </div>
          ) : null}

          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 border-t border-border bg-card p-3"
          >
            <textarea
              value={input}
              onChange={(event) =>
                setInput(
                  event.target.value.slice(
                    0,
                    config.maxMessageLength,
                  ),
                )
              }
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' &&
                  !event.shiftKey
                ) {
                  event.preventDefault();
                  void sendMessage();
                }
              }}
              rows={1}
              maxLength={config.maxMessageLength}
              placeholder={config.placeholder}
              className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted"
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="h-11 rounded-xl bg-foreground px-4 text-sm font-semibold text-background disabled:cursor-not-allowed disabled:opacity-50"
            >
              {config.sendLabel}
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        className="flex h-14 items-center gap-2 rounded-full bg-foreground px-5 font-semibold text-background shadow-xl hover:opacity-90"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/15 text-xs">
          AI
        </span>

        <span className="text-sm">
          {config.title}
        </span>
      </button>
    </div>
  );
}
