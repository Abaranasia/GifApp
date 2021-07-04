import React, {useState} from 'react';
import AddCati from './components/AddCati';
//import CovidInfo from './components/CovidInfo';
import GifGrid from './components/GifGrid';
import Header from './components/Header';

export const GifApp = () => {

    //const categorias = ['tea', 'cat', 'dance']

    const [categorias, setcategorias] = useState(['cats']);

    /*
    const addCati = () => {
        setcategorias([...categorias, 'nueva']);
    }
    */
   
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