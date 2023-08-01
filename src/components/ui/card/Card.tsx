import { Layout } from "@/components/layouts/Layout"
import { Character } from "@/interfaces"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  character: Character
}

export const Card: FC<Props> = ({ character }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`character/${character.tail}`)
  }

  return (
    <li
      onClick={handleClick}
      className="flex flex-col items-center justify-end rounded-lg bg-blue-500 cursor-pointer hover:bg-yellow-500 p-2 transition-all"
    >
      <Image
        src={character.image}
        alt={character.name}
        height={180}
        width={250}
      />
      <h2 className="  text-2xl font-semibold">{character.name}</h2>
    </li>
  )
}
