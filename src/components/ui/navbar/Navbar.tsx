import { localeNames, locales } from "@/locale/constants"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {
  const { locale, asPath } = useRouter()

  return (
    <nav className=" hidden sm:flex justify-between items-end sticky top-0 backdrop-blur-sm pb-5">
      <Link className=" flex items-baseline gap-2 " href="/">
        <Image
          className=""
          width={40}
          height={40}
          src="/img/triforce2.png"
          alt="Triforce"
        />
        <span className=" font-bold text-xl group-hover:text-yellow-300">
          Amiibos
        </span>
      </Link>
      <ul className="flex font-semibold text-xl justify-around  gap-x-7 ">
        <li className="hover:text-blue-400 transition-all">
          <Link href="/contacto">Contacto</Link>
        </li>
        <li className="hover:text-blue-400  transition-all">
          <Link href="/nosotros">Nosotros</Link>
        </li>
        <li className="hover:text-blue-400  transition-all">
          <Link href="/carrito">Carrito</Link>
        </li>

        {/* ---------------------------------- i18n ---------------------------------- */}

        {locale === locales.ES_ES ? (
          <li>
            <Link href={asPath || "/"} locale={locales.DE_DE}>
              <p
                className={
                  "flex gap-2 items-center hover:text-yellow-400 " +
                  (locale === locales.DE_DE ? "text-yellow-400" : "")
                }
              >
                <Image
                  src="/img/germany.png"
                  alt="Germany"
                  width={20}
                  height={20}
                />
                {localeNames[locales.DE_DE as keyof typeof localeNames]}
              </p>
            </Link>
          </li>
        ) : (
          <li>
            <Link href={asPath || "/"} locale={locales.ES_ES}>
              <p
                className={
                  "flex gap-2 items-center hover:text-yellow-400 " +
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
        )}
      </ul>
    </nav>
  )
}
