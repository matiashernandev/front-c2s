import { Layout } from "@/components/layouts/Layout"
import { Character } from "@/interfaces"
import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const CharacterPage = () => {
  const router = useRouter()
  const id = router.query.id

  const [character, setCharacter] = useState<Character>({} as Character)

  const getCharacter = async () => {
    const res = await fetch(`https://amiiboapi.com/api/amiibo?tail=${id}`)
    const json = await res.json()
    console.log(json.amiibo[0].image)
    setCharacter(json.amiibo[0])
  }

  useEffect(() => {
    getCharacter()
  }, [])

  return (
    <Layout title="Página del personaje">
      <div className="h-[calc(100vh-7rem)] bg-orange-300 flex justify-center items-center">
        <div className="bg-white text-black">
          <p>{id}</p>
          <Image
            src={character?.image}
            alt={character?.name}
            width={200}
            height={200}
          />
          <p>{character ? character.name : null}</p>
          <Link href={"/characters"}>Volver</Link>
        </div>
      </div>
    </Layout>
  )
}

export default CharacterPage

/* 
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://amiiboapi.com/api/amiibo?gameseries=The Legend of Zelda"
  )
  const json = await res.json()
  const data = json.amiibo.slice(4, 24)

  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (contex) => {
  //const res = await fetch(`https://amiiboapi.com/api/amiibo?tail=${id}`)
  //const json = await res.json()
  //const data = json.amiibo.slice(4, 24)
  console.log(contex)
  return {
    props: {},
    revalidate: 10,
  }
} 
*/
