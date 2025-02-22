import { Header } from './header';
import { render, screen } from '@testing-library/react'
describe('Header', () => {
  it('should render Header component', () => {
    render(<Header />)

    const header = screen.getByTestId('header')
    const logo = screen.getByAltText(/logotipo da vl software/i)
    const menu = screen.getByTestId('menu')
    const toggle = screen.getByRole('button', {name: 'toggle-theme'})
    
    expect(header).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(menu).toBeInTheDocument()
    expect(toggle).toBeInTheDocument()
  })
})