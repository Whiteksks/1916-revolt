'use client'

import { useState, useEffect } from 'react'
import { MenuIcon, TreePine } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover'
import Logo from './logo'
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'
import { useTheme } from '../theme/theme-provider'
import { cn } from '@/lib/utils'

const navigationData = [
  { title: 'Home', href: '/' },
  { title: 'Timeline', href: '/timeline' },
  { title: 'About Us', href: '/about' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Sources', href: '/sources' },
]

const Header = () => {
  const { setTheme } = useTheme()
  const [isSnowMode, setIsSnowMode] = useState(false)
  const [openPopover, setOpenPopover] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('snowMode') === 'true'
    setIsSnowMode(savedMode)
    if (savedMode) {
      document.body.classList.add('snow-active')
      setTheme('dark')
    }
  }, [setTheme])

  const handleSnowMode = () => {
    const newValue = !isSnowMode
    setIsSnowMode(newValue)
    localStorage.setItem('snowMode', String(newValue))
    window.dispatchEvent(new Event('snowModeChanged'))
    if (newValue) {
      document.body.classList.add('snow-active')
      setTheme('dark')
    } else {
      document.body.classList.remove('snow-active')
    }
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500',
        'backdrop-blur-2xl bg-background/40 border-b border-white/10 shadow-sm rounded-2xl'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-6 sm:px-6">
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          <Link to="/gallery" className="hover:text-primary max-md:hidden">
            Gallery
          </Link>
          <Link to="/timeline" className="hover:text-primary max-md:hidden">
            Timeline
          </Link>
          <Link to="/" className="flex items-center">
            <Logo className="text-foreground gap-3" />
          </Link>
          <Link to="/about" className="hover:text-primary max-md:hidden">
            About Us
          </Link>
          <Link to="/sources" className="hover:text-primary max-md:hidden">
            Sources
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {!isSnowMode && <AnimatedThemeToggler />}

          <Popover open={openPopover} onOpenChange={setOpenPopover}>
            <PopoverTrigger asChild>
              <button
                onMouseEnter={() => setOpenPopover(true)}
                onMouseLeave={() => setOpenPopover(false)}
                onClick={handleSnowMode}
                className={cn(
                  'transition-transform hover:rotate-12',
                  isSnowMode && 'text-sky-400 animate-pulse'
                )}
              >
                <TreePine className="w-6 h-6" />
              </button>
            </PopoverTrigger>

            <PopoverContent
              side="bottom"
              align="center"
              className={cn(
                'w-48 text-center text-sm rounded-2xl border border-white/10 backdrop-blur-2xl',
                'bg-background/60 shadow-lg p-3 select-none pointer-events-none'
              )}
            >
              <p>I'm too lazy to decorate the house, so I decorated the website.</p>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="md:hidden backdrop-blur-2xl bg-background/40 border border-white/10 rounded-xl shadow-lg"
              asChild
            >
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className={cn(
                'w-56 mt-2 rounded-2xl border border-white/10 backdrop-blur-2xl',
                'bg-background/60 shadow-lg transition-all duration-300'
              )}
              align="end"
            >
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    asChild
                    className="hover:bg-white/10 transition-colors rounded-lg"
                  >
                    <Link to={item.href}>{item.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
