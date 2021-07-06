import React, {useState} from 'react';
import AddCati from './components/AddCati';
//import CovidInfo from './components/CovidInfo';
import GifGrid from './components/GifGrid';
import Header from './components/Header';

export const GifApp = () => {
/*** 
 * 
 * Componente principal que presenta tres componentes distintos:
 * <Header /> --> Estético con la cabecera de la app
 * <Addcati /> --> Formulario para búsqueda de temas
 * <GifGrid /> --> Componente que lista los resultados de la búsqueda pedida desde Addcati
 *  
 * En este componente reside el estado de categorías, el cual se va poblando desde el formulario y cuyo valor 
 * se envía a GifGrid para realizar el fetch a la API y pintar los resultados
 * 
 * ***/ 


    const [categorias, setcategorias] = useState(['cats']);


   
    return (
        <div>
            <Header/>
            <main>
                <AddCati setcategorias= {setcategorias}/>

                <ol>{
                    categorias.map (cati => (
                    // (<li key={cati}>{cati}</li>)
                    <GifGrid 
                            key={cati} 
                            categoria={cati} 
                    />
                    ))
                }
                </ol>
            </main> 
        </div>
    )
}