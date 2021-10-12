

export const getGifs = async (categoria) => {
/*** 
 * 
 * Componente que descarga desde la API las imágenes correspondientes a una categoría 
 * Devuelve un objeto con id, title y url
 *  
 * ***/ 

    //api: 6jmEyv2X055hHRTsamg2tMc8NgyIywE8
    // https://developers.giphy.com/docs/api/endpoint/#search

    const url= `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=12&api_key=6jmEyv2X055hHRTsamg2tMc8NgyIywE8`;
    const resp = await fetch (url);
    const { data } = await resp.json();
    
    const fotos= data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return fotos;
}