import Head from "next/head"
import React, { FC } from "react"
import { Navbar } from "../ui/navbar"

interface Props {
  children: React.ReactNode
  title: string
  description?: string
  keywords?: string
}

export const Layout: FC<Props> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* redes sociales */}
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ||
            "Amiibo API es una tienda de figuras interactivas que desbloquean contenido en tus juegos favoritos."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/mario.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container p-5 md:m-auto">
        <Navbar />
        <main className="">{children}</main>
      </div>
    </>
  )
}
