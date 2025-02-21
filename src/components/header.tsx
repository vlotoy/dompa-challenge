import { Flame } from 'lucide-react'

import { Menu } from './menu'
import { ResponsiveMenu } from './responsive-menu'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="fixed top-0 left-1/2  transform -translate-x-1/2  w-full  text-foreground p-6 z-10 flex justify-between items-center max-w-[50rem]">
      <div className="flex items-center gap-1">
        <Flame className="text-orange-500 dark:text-orange-400" />
        <h1 className="text-2xl font-bold">HotSite</h1>
      </div>

      <ResponsiveMenu />

      <Menu />

      <ThemeToggle />
    </header>
  )
}
