import { locales } from "./constants"
import { DE_CONTENT } from "./de-DE"
import { ES_CONTENT } from "./es-ES"

const { DE_DE, ES_ES } = locales

export const CONTENT_BY_LOCALE = {
  [ES_ES]: ES_CONTENT,
  [DE_DE]: DE_CONTENT,
}
