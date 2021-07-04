import React, { useState, useEffect  } from 'react';
import CovidPais from './CovidPais';

function CovidInfo() {
  
    const [datosGlobales, setGlobal] = useState([]);
    const [datosPaises, setPaises] = useState([]);
    const [fecha, setFecha] = useState('');

    const url='https://api.covid19api.com/summary';
    
    
    const getCovid= async ()=> {
        try {
            const resp= await fetch (url);
            const {Global, Countries}= await resp.json();
            
            setGlobal(Global);
            setFecha(Global.Date);
            // setFecha(Date.parse(Global.Date));

            const paises= Countries.map(pais => {
                return {
                    id: pais.ID,
                    nombre: pais.Country,
                    totalConfirmados: pais.TotalConfirmed,
                    totalMuertes: pais.TotalDeaths,
                    totalRecuperados: pais.TotalRecovered,
                    fecha: pais.Date,       
                }});

            setPaises( paises);  
            //console.log (datosPaises)
        }
        catch(err) {    
            console.log ('Error: '+err)
        }
    
        // setGlobal(...datosPaises, Countries);
     
    };
    
    useEffect(() => {
        getCovid();
    }, [])
    
    return (
        <div>
            
            <h2>Incidencias acumuladas de Covid por paises</h2>
            <div id="datosGlobales">
                <h5>Datos obtenidos en fecha {fecha.substr(0, 10)} y actualizado a las {fecha.substr(-13,8)}</h5>
                <ul>
                    <li>Confirmados totales: {parseInt(datosGlobales.TotalConfirmed).toLocaleString()}</li>
                    <li>Muertes totales: {parseInt(datosGlobales.TotalDeaths).toLocaleString()}</li>
                    <li>Recuperados totales: {parseInt(datosGlobales.TotalRecovered).toLocaleString()}</li>
                </ul>
            </div>
            <div id="covidDisplay">
                {
                //console.log (datosPaises);
                datosPaises.map ((pais) => {
                return(<CovidPais pais={pais} key={pais.id}/>)
                    //return( <p key={pais.id}> {pais.nombre}</p>))
                })
            } 
            </div>            
        </div>
    )
}

export default CovidInfo
