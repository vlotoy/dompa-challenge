import git from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import logo from '../assets/logo.png'
import mail from '../assets/mail.svg'

export function Contact() {
  return (
    <footer
      id="contact"
      className="w-full p-20 border flex flex-col items-center justify-between gap-10 text-center sm:flex-row"
    >
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          Vamos trabalhar juntos?
        </h2>
        <span className="text-muted-foreground">
          Entre em contato comigo por e-mail ou pelas minhas redes sociais
        </span>
      </div>

      <div className="space-y-4">
        <span className="flex items-center gap-2">
          <img
            src={mail}
            alt="Ícone de e-mail"
            className="dark:filter dark:invert"
          />
          victor.tostes@gmail.com
        </span>
        <span className="flex items-center justify-center gap-2">
          <img
            src={git}
            alt="Ícone do GitHub"
            className="dark:filter dark:invert"
          />
          vlotoy
        </span>
        <span className="flex items-center justify-center gap-2">
          <img
            src={linkedin}
            alt="Ícone do Linkedin"
            className="dark:filter dark:invert"
          />
          victor-loyola
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Logotipo da VL Software"
          className="dark:filter dark:invert"
        />
        <span>Todos direitos reservados &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
