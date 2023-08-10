import { expect, test, vi } from "vitest"
import { render, screen, within } from "@testing-library/react"
import { useRouter } from "next/router"

vi.mock("next/router", () => ({
  useRouter: () => ({
    locale: "es-ES",
    asPath: "/",
  }),
}))

vi.mock("../src/services/index.ts", () => ({
  getCharacters: vi.fn(),
}))
