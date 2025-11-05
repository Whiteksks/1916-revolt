'use client'

import { useEffect, useState } from 'react'
import { StarsBackground } from '@/components/ui/stars'
import { SnowBackground } from '@/components/ui/snowflakes'
import { cn } from '@/lib/utils'
import { useTheme } from '../theme/theme-provider'

export const StarsBackgroundDemo = () => {
  const { theme } = useTheme()
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [isSnowMode, setIsSnowMode] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const updateTheme = () => {
      if (theme === 'system') {
        setResolvedTheme(media.matches ? 'dark' : 'light')
      } else {
        setResolvedTheme(theme)
      }
    }
    updateTheme()
    media.addEventListener('change', updateTheme)
    return () => media.removeEventListener('change', updateTheme)
  }, [theme])

  useEffect(() => {
    const saved = localStorage.getItem('snowMode') === 'true'
    setIsSnowMode(saved)

    const handleChange = () => {
      const updated = localStorage.getItem('snowMode') === 'true'
      setIsSnowMode(updated)
    }

    window.addEventListener('storage', handleChange)
    window.addEventListener('snowModeChanged', handleChange)

    return () => {
      window.removeEventListener('storage', handleChange)
      window.removeEventListener('snowModeChanged', handleChange)
    }
  }, [])

  if (isSnowMode) {
    return (
      <SnowBackground
        snowColor={resolvedTheme === 'dark' ? '#E0F7FF' : '#B3E5FC'}
        className={cn(
          'fixed inset-0 w-full h-fullflex items-center justify-center rounded-xl z-0 pointer-events-none transition-colors duration-700',
          resolvedTheme === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_top,#1e3a8a_0%,#0f172a_100%)]'
            : 'bg-[radial-gradient(ellipse_at_top,#e0f7ff_0%,#bde0fe_100%)]'
        )}
      />
    )
  }

  return (
    <StarsBackground
      starColor={resolvedTheme === 'dark' ? '#FFF' : '#000'}
      className={cn(
        'absolute inset-0 flex items-center justify-center rounded-xl z-0 pointer-events-none transition-colors duration-700',
        'dark:bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)] bg-[radial-gradient(ellipse_at_bottom,#f5f5f5_0%,#fff_100%)]'
      )}
    />
  )
}
