import { render, screen } from '@testing-library/react'

import { About } from './about'

describe('About', () => {
  it('should render about section', () => {
    render(<About />)

    const about = screen.getByTestId('about')

    expect(about).toBeInTheDocument()
  })

  it('should render about image', () => {
    render(<About />)

    const img = screen.getByAltText(/imagem de victor loyola/i)

    expect(img).toBeInTheDocument()
  })

  it('should render About title and subtitle', () => {
    render(<About />)

    const title = screen.getByText('Quem sou eu?')
    const description = screen.getAllByRole('paragraph')

    expect(title).toBeInTheDocument()
    expect(description).toHaveLength(4)
  })
})
