import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

//TODO types

export default function CharacterInfo() {
  const router = useRouter()
  const id = router.query.id

  const [character, setCharacter] = useState()

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
    <div className="h-screen flex justify-center items-center">
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
  )
}

/* export const getStaticProps: GetStaticProps = async (id) => {
  const res = await fetch(`https://amiiboapi.com/api/amiibo?tail=${id}`)
  const json = await res.json()
  const data = json.amiibo.slice(4, 24)

  return {
    props: { characters: data },
  }
}
 */
