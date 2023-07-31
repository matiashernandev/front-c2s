import { Character } from "@/interfaces"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  character: Character
}

export const Card: FC<Props> = ({ character }) => {
  const router = useRouter()
  return (
    <li className="flex flex-col items-center justify-end">
      <Image
        src={character.image}
        alt={character.name}
        height={300}
        width={200}
        onClick={() => router.push(`characters/${character.tail}`)}
      />
      <h2 className="xl:text-lg font-semibold">{character.name}</h2>
    </li>
  )
}
