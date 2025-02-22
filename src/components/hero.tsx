import { Button } from './ui/button'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center"
    >
        <img
          src="/hero.jpg"
          alt="Imagem de um notebook em cima de uma mesa"
          loading="lazy"
          className="h-screen -z-1 w-full absolute brightness-50 opacity-40 object-cover"
        />

      <div className="mt-22 p-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold mb-4 animate-slide-up">
          <span className="">Victor Loyola</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl  mb-8 animate-slide-up">
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
        className="cursor-pointer bg-foreground hover:bg-rose-600 dark:hover:bg-rose-500 dark:hover:text-foreground"
      >
        Portfólio
      </Button>
    </section>
  )
}
