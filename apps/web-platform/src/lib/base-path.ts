/** مسار Control Center تحت matrixall — يطابق next.config basePath */
export const BASE_PATH = '/control';

export function withBasePath(path: string) {
  if (path.startsWith(BASE_PATH)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized === '/' ? '' : normalized}`;
}
