import './globals.css'

import { About } from './components/about'
import { Contact } from './components/contact'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Portfolio } from './components/portfolio'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dompa-challenge-theme">
      <title>Victor Loyola - Portfólio</title>
      <meta
        name="description"
        content="Portfólio de Victor Loyola, desenvolvedor React especializado em criar interfaces de usuário intuitivas e eficientes."
      />
      <meta
        name="keywords"
        content="React, Desenvolvedor, JavaScript, TypeScript,  Frontend, Portfólio"
      />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </ThemeProvider>
  )
}
