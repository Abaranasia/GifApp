import {useState, useEffect} from 'react'
import { getGifs } from '../components/GetGifs';

export default function useFetchGifs(categoria) {
//export const useFetchGifs = ( category ) => // esta declaración implica la llamada con { }

/*** 
 * 
 * Hook que gestiona la descarga de nuevas imágenes de una categoría desde la api con getGifs
 * Emplea un estado con las imágenes y un booleano para mensaje de "loading.."
 * Actualiza el mensaje "loading.." a false cuando se han recibido las imágenes desde getGifs
 * Devuelve el estado con las fotos y "loading.."
 *  
 * ***/ 

    const [state, setState] = useState({
        data: [],
        loading: true
        });

        useEffect(() => {
            getGifs(categoria)
            .then(fotos => {
                setState({
                    data: fotos,
                    loading: false
                })
            });
            
        }, [categoria]) // dato dependiente; useEffect se ejecuta de nuevo si este valor cambia 

        
    return state 
}
