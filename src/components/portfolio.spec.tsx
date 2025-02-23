import { render, screen } from '@testing-library/react'

import projects from '../../projects.json'
import { Portfolio } from './portfolio'

describe('Portfolio', () => {
  it('should render portfolio section', () => {
    render(<Portfolio />)

    const portfolio = screen.getByTestId('portfolio')

    expect(portfolio).toBeInTheDocument()
  })

  it('should render portfolio title', () => {
    render(<Portfolio />)

    const title = screen.getByText(/meus trabalhos/i)

    expect(title).toBeInTheDocument()
  })

  it('should render portfolio cards', () => {
    render(<Portfolio />)

    const cards = screen.getAllByTestId('portfolio-card')

    expect(cards).toHaveLength(projects.length)
  })
})
