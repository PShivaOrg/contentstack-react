import stack from "./contentstack"

export const getHomepage = async (locale ="en-eu") =>{
    const {entries} = await stack
    .contentType("homepage")
    .entry()
    .query()
    .language(locale)
    .find();

    return entries[0];



};