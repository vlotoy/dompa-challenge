import logo from '../assets/logo.png'
import { Menu } from './menu'
import { ResponsiveMenu } from './responsive-menu'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="fixed px-6 py-2 z-20 w-full flex justify-between items-center text-foreground bg-background bg-opacity-80 shadow-md">
      <div className="flex items-center gap-1">
        <img
          className="h-12 w-16 dark:filter dark:invert"
          src={logo}
          alt="Logo"
        />
      </div>
      <ResponsiveMenu />
      <Menu />
      <ThemeToggle />
    </header>
  )
}
