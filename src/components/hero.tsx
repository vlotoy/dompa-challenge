import { Button } from './ui/button'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 brightness-50 opacity-40 bg-[url(/hero.png)] bg-no-repeat bg-cover bg-center">
        <img
          src="/hero/svg"
          alt="Imagem de um notebook em cima de uma mesa"
          loading="lazy"
        />
      </div>

      <div className="z-10 mt-22 p-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold mb-4 animate-slide-up">
          <span className="">Victor Loyola</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl  mb-8 animate-slide-up">
          Desenvolvedor Front-End
        </p>
      </div>

      <Button
        onClick={() =>
          document
            .getElementById('portfolio')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="z-10 cursor-pointer bg-foreground hover:bg-rose-600 dark:hover:bg-rose-500 dark:hover:text-foreground"
      >
        Portfólio
      </Button>
    </section>
  )
}
