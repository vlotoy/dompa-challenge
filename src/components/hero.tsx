import { Button } from './ui/button'

export function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center p-4 md:p-8 lg:p-16"
    >
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
        Bem-vindo ao Nosso{' '}
        <span className="text-orange-500 dark:text-orange-400">Hot</span>Site
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-orange-500 dark:text-orange-400 mb-8 animate-slide-up">
        Descubra nossos incríveis produtos e serviços.
      </p>
      <Button className="cursor-pointer">Saiba Mais</Button>
    </section>
  )
}
