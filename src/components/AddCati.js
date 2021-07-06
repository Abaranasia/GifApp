import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function AddCati( {setcategorias}) {
/*** 
 * 
 * Componente que pinta un formulario para leer del usuario un tema para buscar
 * Recibe como argumento la función setcategorias que permitirá añadir la categoria buscada al estado
 *   
 * ***/ 


    const [inputVal, setInputVal] = useState('')

    const inputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log ('handleSubmit', inputVal );

        if (inputVal.trim().length>2) {
            setcategorias(cats =>[inputVal, ...cats]); // EL orden importa
            setInputVal('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> {inputVal}</p>
            <input
            type="text"
            placeholder="nueva categoría"
            value= {inputVal}
            onChange={inputChange}
            />
         <button type="submit">Añadir</button>   
        </form>
    )
}

AddCati.propTypes = {
    setcategorias: PropTypes.func.isRequired
}