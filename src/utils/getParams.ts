export function getPage (search: string, init: number): number {
  const pageParam = new URLSearchParams(search).get('page') ?? ''
  return (pageParam.length > 0) ? Number.parseInt(pageParam) : init
}

export function getSearch (search: string): string {
  return new URLSearchParams(search).get('search') ?? ''
}
