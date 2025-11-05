import { useEffect, useState } from 'react'

export function useSnowMode() {
  const [isSnowMode, setIsSnowMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('snowMode') === 'true'
    setIsSnowMode(saved)

    const handler = () => {
      const updated = localStorage.getItem('snowMode') === 'true'
      setIsSnowMode(updated)
    }

    window.addEventListener('storage', handler)
    return () => window.removeEventListener('storage', handler)
  }, [])

  const toggleSnowMode = () => {
    const newValue = !isSnowMode
    setIsSnowMode(newValue)
    localStorage.setItem('snowMode', String(newValue))
  }

  return { isSnowMode, toggleSnowMode }
}
