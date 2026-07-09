'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';

type Task = { id: string; title: string; done: boolean };
type Milestone = { id: string; title: string; done: boolean; tasks: Task[] };

type Props = {
  projectId: string;
  milestones: Milestone[];
};

export function ProjectMilestonesPanel({ projectId, milestones: initial }: Props) {
  const router = useRouter();
  const [newMilestone, setNewMilestone] = useState('');
  const [loading, setLoading] = useState(false);

  async function toggleMilestone(id: string, done: boolean) {
    await fetch(withBasePath(`/api/projects/milestones/${id}`), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !done }),
    });
    router.refresh();
  }

  async function toggleTask(id: string, done: boolean) {
    await fetch(withBasePath(`/api/projects/tasks/${id}`), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: !done }),
    });
    router.refresh();
  }

  async function addMilestone(e: React.FormEvent) {
    e.preventDefault();
    if (!newMilestone.trim()) return;
    setLoading(true);
    await fetch(withBasePath(`/api/projects/${projectId}/milestones`), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newMilestone.trim() }),
    });
    setNewMilestone('');
    setLoading(false);
    router.refresh();
  }

  return (
    <div className="stat-card space-y-4">
      <h3 className="font-semibold">المراحل والمهام</h3>
      <ul className="space-y-4">
        {initial.map((m) => (
          <li key={m.id} className="rounded-xl border border-border/60 p-4">
            <label className="flex cursor-pointer items-center gap-2 font-medium">
              <input
                type="checkbox"
                checked={m.done}
                onChange={() => toggleMilestone(m.id, m.done)}
              />
              <span className={m.done ? 'text-muted line-through' : ''}>{m.title}</span>
            </label>
            {m.tasks.length > 0 && (
              <ul className="mt-3 mr-6 space-y-2">
                {m.tasks.map((t) => (
                  <li key={t.id}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={t.done}
                        onChange={() => toggleTask(t.id, t.done)}
                      />
                      <span className={t.done ? 'text-muted line-through' : ''}>{t.title}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={addMilestone} className="flex gap-2">
        <input
          type="text"
          value={newMilestone}
          onChange={(e) => setNewMilestone(e.target.value)}
          placeholder="مرحلة جديدة…"
          className="field-input flex-1"
        />
        <button type="submit" disabled={loading} className="btn-primary shrink-0 px-4">
          إضافة
        </button>
      </form>
    </div>
  );
}
