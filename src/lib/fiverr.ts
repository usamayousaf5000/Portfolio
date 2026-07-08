/** True when you have replaced the placeholder in `fiverrProfileUrl` in content.ts. */
export function isFiverrLinkReady(fiverrProfileUrl: string) {
  return (
    fiverrProfileUrl.length > 0 &&
    fiverrProfileUrl.startsWith('http') &&
    !fiverrProfileUrl.includes('REPLACE_WITH_YOUR_USERNAME')
  )
}
