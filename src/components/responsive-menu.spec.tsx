import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ResponsiveMenu } from './responsive-menu'

describe('ResponsiveMenu', () => {
  it('should render about section', () => {
    render(<ResponsiveMenu />)

    const menu = screen.getByTestId('responsive-menu')

    expect(menu).toBeInTheDocument()
  })

  it('should render all buttons', async () => {
    const user = userEvent.setup()

    render(<ResponsiveMenu />)

    const menu = screen.getByRole('button')

    await user.click(menu)

    const menuItems = screen.getAllByRole('menuitem')

    expect(menuItems).toHaveLength(4)
    expect(menuItems[0]).toHaveTextContent('Início')
    expect(menuItems[1]).toHaveTextContent('Sobre')
    expect(menuItems[2]).toHaveTextContent('Trabalhos')
    expect(menuItems[3]).toHaveTextContent('Contato')
  })
})
