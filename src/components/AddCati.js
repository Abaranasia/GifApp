import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function AddCati( {setcategorias}) {

    const [inputVal, setInputVal] = useState('')

    const inputChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputVal.trim().length>2) {
            setcategorias(cats =>[inputVal, ...cats]); // EL orden importa
            setInputVal('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
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