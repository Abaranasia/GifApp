import React from 'react'

export default function GifGridItem({title, url}) {
/*** 
 * 
 * Componente que imprime en pantalla cada imagen recibida desde GifGrid
 *  
 * ***/ 

    return (
        <figure  className="foto">
            <a href={url} target="_blank" rel="noreferrer">
                <img src= {url} alt= {title}/>
            </a>
            <figcaption>{title}</figcaption>
        </figure>
    )
}
