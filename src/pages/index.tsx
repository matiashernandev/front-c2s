import { Layout } from "@/components/layouts/Layout"
import { Card } from "@/components/ui/card"
import { Character } from "@/interfaces"
import { GetStaticProps, NextPage } from "next"

interface Props {
  characters: Character[]
}

const Home: NextPage<Props> = ({ characters }) => {
  return (
    <>
      <Layout
        title="Listado de Amiibos"
        description="Descripcion del listado de amibos"
      >
        <h1 className="text-5xl font-bold text-center">Amiibos</h1>
        <ul className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {characters
            ? characters.map((character) => (
                <Card key={character.tail} character={character} />
              ))
            : null}
        </ul>
      </Layout>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://amiiboapi.com/api/amiibo?gameseries=The Legend of Zelda"
  )
  const json = await res.json()
  const data = json.amiibo.slice(4, 24)

  return {
    props: { characters: data },
  }
}
