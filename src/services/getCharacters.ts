import { Character } from "@/interfaces"

export const getCharacters = async (): Promise<Character[]> => {
  const res = await fetch(
    "https://amiiboapi.com/api/amiibo?gameseries=The Legend of Zelda"
  )
  const json = await res.json()
  const characters = json.amiibo.slice(4, 24)

  return characters
}
