import { render, screen } from '@testing-library/react'

import { Hero } from './hero'

describe('Hero', () => {
  it('should render hero section', () => {
    render(<Hero />)

    const hero = screen.getByTestId('hero')

    expect(hero).toBeInTheDocument()
  })

  it('should render hero image', () => {
    render(<Hero />)

    const background = screen.getByAltText(
      /imagem de um notebook em cima de uma mesa/i,
    )

    expect(background).toBeInTheDocument()
  })

  it('should render hero title and subtitle', () => {
    render(<Hero />)

    const title = screen.getByText('Victor Loyola')
    const subtitle = screen.getByText('Desenvolvedor Front-End')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it('should render portfolio button', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /portfólio/i })

    expect(button).toBeInTheDocument()
  })
})
