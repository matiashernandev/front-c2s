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
        description="¡Encuentra tu colección de figuras Amiibo en nuestro eCommerce! Explora una amplia selección de personajes, como Mario, Zelda, Pokémon y muchos más. Conecta con tus personajes favoritos y desbloquea contenido especial en tus juegos. ¡Envío rápido y seguro garantizado!"
        keywords="Figuras Amiibo, Colección Amiibo, Personajes de Videojuegos, Amiibo API, Mario, Zelda, Pokémon, Juguetes Interactivos, Desbloquear Contenido, Comprar Amiibo, Coleccionables de Juegos, Tienda de Amiibo."
      >
        <h1 className="text-5xl font-bold text-center mb-10">Amiibos</h1>
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
