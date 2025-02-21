import './globals.css'

import { About } from './components/about'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { ThemeProvider } from './components/theme-provider'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dompa-challenge-theme">
      <title>My Hotsite</title>
      <Header />
      <Hero />
      <About />
    </ThemeProvider>
  )
}
