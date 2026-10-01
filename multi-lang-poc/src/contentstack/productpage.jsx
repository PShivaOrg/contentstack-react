import stack from "./contentstack"


export const getProductPage = async (locale = "en-us") =>{
     const { entries } = await stack
        .contentType("product")
        .entry()
        .locale(locale)
        .includeFallback()
        .query()
        // .equalTo("url", "/")
        .find()

    return entries[0]

}