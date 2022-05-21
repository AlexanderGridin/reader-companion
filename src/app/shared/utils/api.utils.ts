export function getFullApiUrl(partialUrl: string): string {
  const apiUrlPrefix = 'http://localhost:3000/api/';
  return `${apiUrlPrefix}${partialUrl}`;
}
