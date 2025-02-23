import { render, screen } from '@testing-library/react'

import { Contact } from './contact'

describe('Contact', () => {
  it('should render contact section', () => {
    render(<Contact />)

    const contact = screen.getByTestId('contact')

    expect(contact).toBeInTheDocument()
  })

  it('should render contact title', () => {
    render(<Contact />)

    const title = screen.getByText('Vamos trabalhar juntos?')
    const subtitle = screen.getByText(
      'Entre em contato comigo por e-mail ou pelas minhas redes sociais',
    )

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })

  it('should render contact socials', () => {
    render(<Contact />)

    const mail = screen.getByText('victor.tostes@gmail.com')
    const github = screen.getByText('vlotoy')
    const linkedin = screen.getByText('victor-loyola')

    expect(mail).toBeInTheDocument()
    expect(mail).toHaveAttribute('href', 'mailto:victor.tostes@gmail.com')
    expect(github).toBeInTheDocument()
    expect(github).toHaveAttribute('href', 'https://github.com/vlotoy')
    expect(linkedin).toBeInTheDocument()
    expect(linkedin).toHaveAttribute(
      'href',
      'https://linkedin.com/in/victor-loyola',
    )
  })

  it('should render logo and copyrights', () => {
    render(<Contact />)

    const logo = screen.getByAltText('Logotipo da VL Software')
    const copyright = screen.getByText('Todos direitos reservados © 2025')

    expect(logo).toBeInTheDocument()
    expect(copyright).toBeInTheDocument()
  })
})
