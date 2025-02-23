import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  function toggleTheme() {
    return theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Button
      aria-label="toggle-theme"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="hover:cursor-pointer"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
