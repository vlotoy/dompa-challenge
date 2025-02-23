import projects from '../../projects.json'
import { Card } from './card'

export function Portfolio() {
  return (
    <section data-testid="portfolio" id="portfolio">
      <div className="container mx-auto space-y-16 px-12 pt-18 pb-60">
        <h2 className="text-center text-3xl font-bold">Meus Trabalhos</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
