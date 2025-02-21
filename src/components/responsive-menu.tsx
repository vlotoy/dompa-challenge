import { MenuIcon } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function ResponsiveMenu() {
  function scrollToElement(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="sm:hidden size-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="absolute h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="sm:hidden">
          <DropdownMenuItem onClick={() => scrollToElement('hero')}>
            Início
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToElement('features')}>
            Recursos
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToElement('contact')}>
            Contato
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
