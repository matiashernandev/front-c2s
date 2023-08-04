import { Layout } from "@/components/layouts/Layout"
import { Character } from "@/interfaces"
import { CONTENT_BY_LOCALE } from "@/locale"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SkewLoader } from "react-spinners"

interface Props {
  character: Character
}

const CharacterPage: NextPage<Props> = ({ character }) => {
  const { locale } = useRouter()
  const localeContent =
    CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]

  const { home } = localeContent
  // console.log(character)
  // const router = useRouter()
  // const id = router.query.id

  /*   const [character, setCharacter] = useState<Character>({} as Character)

  const getCharacter = async () => {
    const res = await fetch(`https://amiiboapi.com/api/amiibo?tail=${id}`)
    const json = await res.json()
    //console.log(json.amiibo[0].image)
    setCharacter(json?.amiibo[0])
  }

  useEffect(() => {
    getCharacter()
  }, []) */

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

  const characters = await fetch(
    "https://amiiboapi.com/api/amiibo?gameseries=The Legend of Zelda"
  )
  const resp = await characters.json()
  const data = resp.amiibo.slice(4, 24)

  // Obtener los paths para los personajes junto con los locales
  const paths = data.flatMap((character: Character) =>
    idiomas.map((locale: string) => ({
      params: { tail: character.tail },
      locale,
    }))
  )

  //console.log(paths)

  /*   const res = await fetch(
    "https://amiiboapi.com/api/amiibo?gameseries=The Legend of Zelda"
  )
  const json = await res.json()
  const data = json.amiibo.slice(4, 24)
  const paths = data.map(({ tail }: { tail: string }) => ({
    params: { tail: `${tail}` },
  })) */

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://amiiboapi.com/api/amiibo?tail=${params!.tail}`
  )
  const data = await res.json()
  const character = data.amiibo[0]

  return {
    props: { character },
    revalidate: 10,
  }
}
