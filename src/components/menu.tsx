import { useState } from 'react'

import { Button } from './ui/button'

export function Menu() {
  const [activeSection, setActiveSection] = useState('')

  function handleClick(elementId: string) {
    setActiveSection(elementId)
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div data-testid="menu" className="hidden sm:flex sm:space-x-4">
      <Button
        data-active={activeSection === 'hero'}
        variant="link"
        className="text-lg antialiased hover:cursor-pointer"
        onClick={() => handleClick('hero')}
      >
        Início
      </Button>
      <Button
        data-active={activeSection === 'about'}
        variant="link"
        className="text-lg antialiased hover:cursor-pointer"
        onClick={() => handleClick('about')}
      >
        Sobre
      </Button>
      <Button
        data-active={activeSection === 'portfolio'}
        variant="link"
        className="text-lg antialiased hover:cursor-pointer"
        onClick={() => handleClick('portfolio')}
      >
        Trabalhos
      </Button>
      <Button
        data-active={activeSection === 'contact'}
        variant="link"
        className="text-lg antialiased hover:cursor-pointer"
        onClick={() => handleClick('contact')}
      >
        Contato
      </Button>
    </div>
  )
}
