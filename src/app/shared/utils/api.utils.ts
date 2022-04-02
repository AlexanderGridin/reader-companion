export function getFullApiUrl(partialUrl: string): string {
  const apiUrlPrefix = 'http://localhost:3000';
  return `${apiUrlPrefix}${partialUrl}`;
}
