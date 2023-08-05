import { localeNames, locales } from "@/locale/constants"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {
  const { locale, asPath } = useRouter()

  //console.log(locale, asPath)

  // console.log(locale)
  // const t = locale === "en-US" ? EN_CONTENT : ES_CONTENT
  //  console.log(t)

  return (
    <nav className="hidden sm:flex justify-between items-center ">
      <Link href="/">
        <Image
          className="w-7"
          width={19}
          height={40}
          src="/img/mario-logo.webp"
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

        <li>
          <Link href={asPath || "/"} locale={locales.ES_ES}>
            <p
              className={
                "flex gap-2 items-center " +
                (locale === locales.ES_ES ? "text-yellow-400" : "")
              }
            >
              <Image
                src="/img/spanish.png"
                alt="Español"
                width={20}
                height={20}
              />
              {localeNames[locales.ES_ES as keyof typeof localeNames]}
            </p>
          </Link>
        </li>
        <li>
          <Link href={asPath || "/"} locale={locales.EN_US}>
            <p
              className={
                "flex gap-2 items-center " +
                (locale === locales.EN_US ? "text-yellow-400" : "")
              }
            >
              <Image
                src="/img/english.png"
                alt="English"
                width={20}
                height={20}
              />
              {localeNames[locales.EN_US as keyof typeof localeNames]}
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
