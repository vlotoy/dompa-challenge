import { useInView } from 'react-intersection-observer'

interface CardProps {
  image: string
  title: string
  description: string
}

export const Card = ({ image, title, description }: CardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <div
      data-testid="portfolio-card"
      ref={ref}
      className={`bg-card text-card-foreground space-y-4 rounded-lg p-4 shadow-lg transition-transform duration-1500 ${
        inView
          ? 'animate-slide-up scale-100 transform'
          : 'scale-95 transform opacity-0'
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full rounded-t-lg object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
