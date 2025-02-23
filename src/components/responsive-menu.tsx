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
    <div data-testid="responsive-menu" className="size-8 sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="hover:cursor-pointer"
          >
            <MenuIcon className="h-[1.2rem] w-[1.2rem] dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="sm:hidden">
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => scrollToElement('hero')}
          >
            Início
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => scrollToElement('about')}
          >
            Sobre
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => scrollToElement('portfolio')}
          >
            Trabalhos
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => scrollToElement('contact')}
          >
            Contato
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
