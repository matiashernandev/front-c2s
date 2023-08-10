import { Layout } from "@/components/layouts/Layout"
import { Character } from "@/interfaces"
import { CONTENT_BY_LOCALE } from "@/locale"
import { getCharacter, getCharacters } from "@/services"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { SkewLoader } from "react-spinners"

interface Props {
  character: Character
}

const CharacterPage: NextPage<Props> = ({ character }) => {
  const { locale } = useRouter()
  const localeContent =
    CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]

  const { home } = localeContent

  return (
    <Layout title={home.title}>
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <div className="text-white flex flex-col  justify-between items-center">
          {character.image ? (
            <Image
              src={character.image}
              alt={character.name}
              width={180}
              height={250}
              priority={true}
            />
          ) : (
            <SkewLoader size={35} color="#fae906" />
          )}
          <p className="text-3xl font-bold">{character.name}</p>
          <Link
            className="text-xl mt-5 py-2 px-4 rounded-2xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            href="/"
          >
            Volver
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default CharacterPage

export const getStaticPaths: GetStaticPaths = async (locales) => {
  const idiomas = locales.locales as string[]

  const characters = await getCharacters()

  /* const resultado = []
  for (const character of characters) {
    for (const idioma of idiomas) {
      resultado.push({ params: { id: character.tail }, locale: idioma })
    }
  } */

  /*   const resultado = characters.map((character) => {
    return idiomas.map((idioma) => {
      return { params: { id: character.tail }, locale: idioma }
    })
  }).flat() */

  const paths = characters.flatMap((character: Character) =>
    idiomas.map((locale: string) => ({
      params: { tail: character.tail },
      locale,
    }))
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.tail
  const character = await getCharacter(id as string)

  return {
    props: { character },
    revalidate: 10,
  }
}
