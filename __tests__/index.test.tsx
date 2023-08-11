import Home, { getStaticProps } from "@/pages"
import { render, screen } from "@testing-library/react"
import React from "react"
//import { getCharacters } from "@/service"

vi.mock("next/router", () => ({
  useRouter: () => ({
    locale: "es-ES",
    asPath: "/",
  }),
}))

vi.mock("../src/services", () => ({
  getCharacters: vi.fn(),
}))

/* function MockImage(props: any) {
  const { priority, ...otherProps } = props
  return React.createElement("img", {
    ...otherProps,
    priority: priority ? "true" : undefined,
  })
}
vi.mock("next/image", () => MockImage) */

describe("Home", () => {
  it("Should render Heading", () => {
    render(<Home characters={[]} />)

    const heading = screen.getByText("Amiibos")

    expect(heading).toBeDefined()

    //screen.debug()
  })

  it("Should render list characters", async () => {
    const characters2 = [
      {
        tail: "1",
        name: "Mario",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
        amiiboSeries: "Super Smash Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21",
        },
        type: "Figure",
      },
      {
        tail: "2",
        name: "Luigi",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png",
        amiiboSeries: "Super Smash Bros.",
        character: "Luigi",
        gameSeries: "Super Mario",
        head: "00010000",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21",
        },
        type: "Figure",
      },
    ]

    /*   vi.mock("@/services", () => ({
      getCharacters: vi.fn(() => Promise.resolve(characters)),
    })) */

    //const { characters } = await render(getStaticProps)

    render(<Home characters={characters2} />)

    const mario = screen.getByText("Mario")
    const luigi = screen.getByText("Luigi")

    expect(mario).toBeDefined()
    expect(luigi).toBeDefined()

    screen.debug()
  })
})
