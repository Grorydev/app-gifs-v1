export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=y9KU7rFo1Dkmxsa9LycIlMaApRegwCSc&q=${category}&limit=10`

    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map(img => {
        //Para poner la primera letra en mayuscula
        const capitalaze_title = img.title.charAt(0).toUpperCase() + img.title.slice(1).toLowerCase();
        //Para quitar la palabra GIF y quitar espacios al inicio y al final
        const modify = capitalaze_title.replace("gif","").trim()
        return {
            id: img.id,
            title: modify,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}