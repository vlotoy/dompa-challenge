import { useEffect, useState } from 'react'

import logo from '../assets/logo.png'
import { Menu } from './menu'
import { ResponsiveMenu } from './responsive-menu'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return window.removeEventListener('resize', () =>
      setWidth(window.innerWidth),
    )
  }, [])

  return (
    <header
      data-testid="header"
      className="text-foreground bg-background bg-opacity-80 fixed z-20 flex w-full items-center justify-between px-6 py-2 shadow-md"
    >
      <div className="flex items-center gap-1">
        <img
          className="h-12 w-16 dark:invert dark:filter"
          src={logo}
          alt="Logotipo da VL Software"
        />
      </div>

      {width < 640 ? <ResponsiveMenu /> : <Menu />}
      <ThemeToggle />
    </header>
  )
}
