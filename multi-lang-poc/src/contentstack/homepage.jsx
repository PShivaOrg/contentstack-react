import stack from "./contentstack"

export const getHomepage = async (locale = "en-us") => {
    const { entries } = await stack
        .contentType("page")
        .entry()
        .locale(locale)
        .includeFallback()
        .query()
        .equalTo("url", "/")
        .find()

    return entries[0]
}