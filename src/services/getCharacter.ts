import { Character } from "@/interfaces"

export const getCharacter = async (id: string): Promise<Character> => {
  const res = await fetch(`https://amiiboapi.com/api/amiibo?tail=${id}`)
  const data = await res.json()
  const character = data.amiibo[0]

  return character
}
