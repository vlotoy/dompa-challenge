export function Menu() {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex space-x-4">
        <li>
          <a href="#hero" className="hover:underline">
            Início
          </a>
        </li>
        <li>
          <a href="#features" className="hover:underline">
            Recursos
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}
