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
      ref={ref}
      className={`bg-card p-4 rounded-lg shadow-lg text-card-foreground transition-transform duration-1500 space-y-4 ${
        inView
          ? 'transform scale-100 animate-slide-up'
          : 'transform scale-95 opacity-0'
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
