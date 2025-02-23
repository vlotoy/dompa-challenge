import git from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import logo from '../assets/logo.png'
import mail from '../assets/mail.svg'

export function Contact() {
  return (
    <footer
      data-testid="contact"
      id="contact"
      className="flex w-full flex-col items-center justify-between gap-10 border p-20 text-center sm:flex-row"
    >
      <div className="space-y-6">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
          Vamos trabalhar juntos?
        </h2>
        <span className="text-muted-foreground text-lg">
          Entre em contato comigo por e-mail ou pelas minhas redes sociais
        </span>
      </div>

      <div className="space-y-4">
        <span className="hover:animate-grow flex items-center gap-2 hover:text-rose-500 dark:hover:text-rose-500">
          <img
            src={mail}
            alt="Ícone de e-mail"
            className="dark:invert dark:filter"
          />
          <a
            target="_blank"
            href="mailto:victor.tostes@gmail.com"
            rel="noreferrer"
          >
            victor.tostes@gmail.com
          </a>
        </span>
        <span className="hover:animate-grow flex items-center justify-center gap-2 hover:text-rose-500 dark:hover:text-rose-500">
          <img
            src={git}
            alt="Ícone do GitHub"
            className="dark:invert dark:filter"
          />
          <a target="_blank" href="https://github.com/vlotoy" rel="noreferrer">
            vlotoy
          </a>
        </span>
        <span className="hover:animate-grow flex items-center justify-center gap-2 hover:text-rose-500 dark:hover:text-rose-500">
          <img
            src={linkedin}
            alt="Ícone do Linkedin"
            className="dark:invert dark:filter"
          />
          <a
            target="_blank"
            href="https://linkedin.com/in/victor-loyola"
            rel="noreferrer"
          >
            victor-loyola
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Logotipo da VL Software"
          className="dark:invert dark:filter"
        />
        <span>Todos direitos reservados &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
