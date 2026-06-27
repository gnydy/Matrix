import { THEME_STORAGE_KEY } from '@/lib/theme';

export function ThemeScript() {
  const script = `(function(){try{var k='${THEME_STORAGE_KEY}';var t=localStorage.getItem(k);var r=document.documentElement;if(t==='dark'||t==='light'){r.classList.add(t);return}var d=window.matchMedia('(prefers-color-scheme: dark)').matches;r.classList.add(d?'dark':'light')}catch(e){document.documentElement.classList.add('light')}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
