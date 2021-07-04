import React from 'react'
import GifGridItem from './GifGridItem';
import useFetchGifs from './hooks/useFetchGifs';

export default function GifGrid({categoria}) {
/*** 
 * 
 * Componente que obtiene las imágenes de una categoría llamando a useFetchGifs 
 * y las presenta en la capa .resultados empleando el componente GifGridItem
 *  
 * ***/ 


   const {data:images, loading} = useFetchGifs(categoria);
   // Renombramos data a images para facilitar la lectura del código

    return (
        <>
            <h2>{categoria}</h2>
            
            {loading && <p>Loading...</p>}

            <div className="resultados animate__animated animate__backInDown">
               { images.map(image => (
                  <GifGridItem key={image.id} {...image}/>
               ))
                }
            </div>
        </>
    )
}
