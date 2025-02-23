import { render, screen } from '@testing-library/react'

import projects from '../../projects.json'
import { Card } from './card'

describe('Card', () => {
  it('should render a card component', () => {
    const item = projects[0]

    render(
      <Card
        image={item.image}
        title={item.title}
        description={item.description}
      />,
    )

    const card = screen.getByTestId('portfolio-card')

    expect(card).toBeInTheDocument()
  })

  it('should render a card image', () => {
    const item = projects[0]

    render(
      <Card
        image={item.image}
        title={item.title}
        description={item.description}
      />,
    )

    const img = screen.getByAltText(item.title)

    expect(img).toBeInTheDocument()
  })

  it('should render a card title', () => {
    const item = projects[0]

    render(
      <Card
        image={item.image}
        title={item.title}
        description={item.description}
      />,
    )

    const title = screen.getByText(item.title)

    expect(title).toBeInTheDocument()
  })

  it('should render a card description', () => {
    const item = projects[0]

    render(
      <Card
        image={item.image}
        title={item.title}
        description={item.description}
      />,
    )

    const description = screen.getByText(item.description)

    expect(description).toBeInTheDocument()
  })
})
