export function cn(...v: Array<string | false | null | undefined>) { return v.filter(Boolean).join(' '); }
export function pct(n:number){return `${Math.round(n)}%`;}
