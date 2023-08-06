import { Character } from "@/interfaces"
import Image from "next/image"
import { useRouter } from "next/router"
import { FC, useEffect } from "react"

import toast, { Toaster } from "react-hot-toast"

interface Props {
  character: Character
}

export const Card: FC<Props> = ({ character }) => {
  const { push } = useRouter()
  const notify = () =>
    toast("Loading...", {
      icon: "👀",
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#09f",
        color: "#fff",
      },
    })

  useEffect(() => {
    toast.remove()
  }, [])

  //console.log(character)

  const handleClick = () => {
    notify()
    push(`/character/${character.tail}`)
  }

  return (
    <li
      onClick={handleClick}
      className="flex flex-col items-center justify-end rounded-lg bg-blue-500 cursor-pointer hover:bg-yellow-500 p-2 transition-all      
      active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
    >
      <Image
        src={character.image}
        alt={character.name}
        height={180}
        width={250}
      />
      <h2 className=" text-center text-2xl font-semibold">{character.name}</h2>
      <Toaster />
    </li>
  )
}
