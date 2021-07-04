import React from 'react'

export default function CovidPais({pais}) {
    return (
        <div className="pais">
            <h3>{pais.nombre}</h3>
            <ul>
                <li>Confirmados: {parseInt(pais.totalConfirmados).toLocaleString()}</li>
                <li>Muertes: {parseInt(pais.totalMuertes).toLocaleString()}</li>
                <li>Recuperados: {parseInt(pais.totalRecuperados).toLocaleString()}</li>
            </ul>
        </div>
    )
}
