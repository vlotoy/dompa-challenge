import { render, screen } from '@testing-library/react'

import { Menu } from './menu'

describe('Menu', () => {
  it('should render about section', () => {
    render(<Menu />)

    const menu = screen.getByTestId('menu')

    expect(menu).toBeInTheDocument()
  })

  it('should render all buttons', () => {
    render(<Menu />)

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(4)
    expect(buttons[0]).toHaveTextContent('Início')
    expect(buttons[1]).toHaveTextContent('Sobre')
    expect(buttons[2]).toHaveTextContent('Trabalhos')
    expect(buttons[3]).toHaveTextContent('Contato')
  })
})
