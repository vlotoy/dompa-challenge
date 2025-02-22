import me from '../assets/me.png'

export function About() {
  return (
    <section
      id="about"
      className=" container mx-auto px-12 py-50 flex flex-col items-center justify-center gap-12 md:flex-row"
    >
      <img
        src={me}
        alt="Imagem de Victor Loyola"
        className="size-60 lg:size-100 rounded-2xl shadow-md"
        loading="lazy"
      />
      <div className="space-y-6 text-center text-foreground antialiased max-w-[42rem]">
        <h1 className="font-bold text-3xl">Quem sou eu?</h1>
        <p>
          Proident proident esse minim esse et culpa. Lorem excepteur aliquip
          sunt minim. Id anim irure consequat irure qui incididunt excepteur
          irure consectetur ex. Ut consequat nostrud sunt et et. Enim deserunt
          ad incididunt irure occaecat cillum ea non. Ad minim tempor velit
          incididunt ipsum id dolore incididunt id ad in. Proident proident esse
          minim esse et culpa.
        </p>
        <p>
          Proident proident esse minim esse et culpa. Lorem excepteur aliquip
          sunt minim. Id anim irure consequat irure qui incididunt excepteur
          irure consectetur ex. Ut consequat nostrud sunt et et. Enim deserunt
          ad incididunt irure occaecat cillum ea non. Ad minim tempor velit
          incididunt ipsum id dolore incididunt id ad in. Proident proident esse
          minim esse et culpa.
        </p>
        <p>
          Proident proident esse minim esse et culpa. Lorem excepteur aliquip
          sunt minim. Id anim irure consequat irure qui incididunt excepteur
          irure consectetur ex. Ut consequat nostrud sunt et et. Enim deserunt
          ad incididunt irure occaecat cillum ea non. Ad minim tempor velit
          incididunt ipsum id dolore incididunt id ad in. Proident proident esse
          minim esse et culpa.
        </p>
        <p>
          Proident proident esse minim esse et culpa. Lorem excepteur aliquip
          sunt minim. Id anim irure consequat irure qui incididunt excepteur
          irure consectetur ex. Ut consequat nostrud sunt et et. Enim deserunt
          ad incididunt irure occaecat cillum ea non. Ad minim tempor velit
          incididunt ipsum id dolore incididunt id ad in. Proident proident esse
          minim esse et culpa.
        </p>
      </div>
    </section>
  )
}
