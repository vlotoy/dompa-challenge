import { Button } from './ui/button'

export function Hero() {
  return (
    <section
      data-testid="hero"
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center"
    >
      <img
        src="/hero.jpg"
        alt="Imagem de um notebook em cima de uma mesa"
        loading="lazy"
        className="absolute -z-1 h-screen w-full object-cover opacity-40 brightness-50"
      />

      <div className="mt-22 p-6 text-center">
        <h1 className="animate-slide-up mb-4 text-3xl font-bold md:text-5xl lg:text-8xl">
          <span className="">Victor Loyola</span>
        </h1>
        <p className="animate-slide-up mb-8 text-lg md:text-xl lg:text-2xl">
          Desenvolvedor Front-End
        </p>
      </div>

      <Button
        size={'xl'}
        onClick={() =>
          document
            .getElementById('portfolio')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="bg-foreground dark:hover:text-foreground cursor-pointer hover:bg-rose-600 dark:hover:bg-rose-500"
      >
        Portfólio
      </Button>
    </section>
  )
}
