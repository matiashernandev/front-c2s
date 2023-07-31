import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className=" my-5 flex justify-between items-center ">
      <Link href="/">
        <Image width={30} height={50} src="/mario-logo.webp" alt="Mario" />
      </Link>
      <ul className="flex font-semibold text-xl justify-around gap-x-7">
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
        <li>
          <Link href="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link href="/carrito">Carrito</Link>
        </li>
      </ul>
    </nav>
  )
}
