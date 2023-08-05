import { Layout } from "@/components/layouts/Layout"
import { Card } from "@/components/ui/card"
import { Character } from "@/interfaces"
import { CONTENT_BY_LOCALE } from "@/locale"
import { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"

interface Props {
  characters: Character[]
}

const Home: NextPage<Props> = ({ characters }) => {
  const { locale } = useRouter()
  const localeContent =
    CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]

  const { home } = localeContent

  return (
    <div className="flex flex-col items-center">
      <Layout
        title={home.title}
        /*   description="¡Encuentra tu colección de figuras Amiibo en nuestro eCommerce! Explora una amplia selección de personajes, como Mario, Zelda, Pokémon y muchos más. Conecta con tus personajes favoritos y desbloquea contenido especial en tus juegos. ¡Envío rápido y seguro garantizado!" */
        description={home.description}
        keywords="La Movida, Ostia, Caña, Illo, Mazo, Flipante, Enrollao, Dale candela, Colega, Guay."
      >
        <div className="flex items-baseline gap-5">
          <h1 className="text-3xl my-5 font-bold text-center">{home.h1}</h1>
        </div>
        <ul className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
          {characters
            ? characters.map((character) => (
                <Card key={character.tail} character={character} />
              ))
            : null}
        </ul>
      </Layout>
    </div>
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
