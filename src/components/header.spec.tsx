import { render, screen } from '@testing-library/react'

import { Header } from './header'

function resizeWindow(width: number) {
  window.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

describe('Header', () => {
  it('should render header', () => {
    render(<Header />)
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
  })

  it('should render logo', () => {
    render(<Header />)
    const logo = screen.getByAltText(/logotipo da vl software/i)
    expect(logo).toBeInTheDocument()
  })

  it('should render menu for bigger devices', () => {
    render(<Header />)

    const menu = screen.getByTestId('menu')

    expect(menu).toBeInTheDocument()
  })

  it('should render responsive menu for smaller devices', () => {
    resizeWindow(500)
    render(<Header />)

    const menu = screen.getByTestId('responsive-menu')

    expect(menu).toBeInTheDocument()
  })

  it('should render theme toggle button', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'toggle-theme' })

    expect(toggle).toBeInTheDocument()
  })
})
