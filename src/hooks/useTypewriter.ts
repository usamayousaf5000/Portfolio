import { useEffect, useState } from 'react'

/**
 * Typewriter effect. When `enabled` is false, returns `text` immediately
 * (no effect body setState for the disabled case).
 */
export function useTypewriter(
  text: string,
  speedMs: number,
  startDelayMs = 0,
  enabled = true,
) {
  const [out, setOut] = useState('')

  useEffect(() => {
    if (!enabled) return
    let intervalId: number | undefined
    const startId = window.setTimeout(() => {
      setOut('')
      let i = 0
      intervalId = window.setInterval(() => {
        i += 1
        setOut(text.slice(0, i))
        if (i >= text.length && intervalId) {
          window.clearInterval(intervalId)
        }
      }, speedMs)
    }, startDelayMs)

    return () => {
      window.clearTimeout(startId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [text, speedMs, startDelayMs, enabled])

  if (!enabled) return text
  return out
}
