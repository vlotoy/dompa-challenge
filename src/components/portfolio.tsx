import { Card } from './card'

export function Portfolio() {
  const projects = [
    {
      image: '/card1.png',
      title: '2017-2018 | React para feature phones',
      description:
        'Desenvolvimento de aplicativos com as primeiras versões do React para celulares com SO baseado em VanillaJS',
    },
    {
      image: '/card2.png',
      title: '2019-2024 | Aplicações para bancos digitais',
      description:
        'Desenvolvimento de aplicações de serviços bancários participando desde os primeiros conceitos e refinamentos até entrega em produção. Tecnologias utizadas: React, JavaScript, TypeScript, Next.Js, Node.Js, Redux, Context API, React Testing Library, Jest, Styled Components, CSS Modules, Bootstrap',
    },
    {
      image: '/card3.png',
      title: '2025 - Aplicação de monitoramento de pedidos de restaurante',
      description:
        'Projeto com formulário de autenticação e dashboard de acompanhamento de pedidos de uma pizzaria. Tecnologias utilizadas: TypeScript, React 19, React Hook Form, Zod, React Query, Tailwind.',
    },
  ]

  return (
    <section id="portfolio">
      <div className="container mx-auto px-12 pt-18 pb-60 space-y-16">
        <h2 className="text-3xl font-bold text-center">Meus Trabalhos</h2>
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
