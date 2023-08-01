import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className=" mt-3 flex justify-between items-center ">
      <Link href="/">
        <Image
          className="w-7"
          width={19}
          height={40}
          src="/mario-logo.webp"
          alt="Mario"
        />
      </Link>
      <ul className="flex font-semibold text-xl justify-around gap-x-7 ">
        <li className="hover:text-blue-400 transition-all">
          <Link href="/contacto">Contacto</Link>
        </li>
        <li className="hover:text-blue-400  transition-all">
          <Link href="/nosotros">Nosotros</Link>
        </li>
        <li className="hover:text-blue-400  transition-all">
          <Link href="/carrito">Carrito</Link>
        </li>
      </ul>
    </nav>
  )
}
