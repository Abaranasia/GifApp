import React from "react";
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import GifGrid from '../components/GifGrid';
import useFetchGifs from '../hooks/useFetchGifs';

jest.mock('../hooks/useFetchGifs');


describe('Pruebas GifGrid', () => {

    const categoria="Gantz";
    

    test('Debe coincidir con el snapshot', () => {

        useFetchGifs.mockReturnValue({ // Simula la devolución de un objeto por parte del hook, vació en este caso
            data: [],
            loading: true
        });
    
        const wrapper= shallow(<GifGrid categoria= { categoria } />);

        expect(wrapper).toMatchSnapshot();
    })
    


    test('Debe mostrar items cuando recibimos una respuesta de GetGifs', () => {
        
        const respuesta = [ //array con 1 elemento para la simulación
            {
                id: 1,
                title: "algo",
                url: "http://localhost/foto.jpg"
            }]

        useFetchGifs.mockReturnValue({ // Simula la devolución de un objeto por parte del hook, con datos
            data: [respuesta],
            loading: false
        });


        const wrapper= shallow(<GifGrid categoria= { categoria } />);

        expect(wrapper).toMatchSnapshot(); //Coincide con el snapshot
        expect (wrapper.find('p').exists() ).toBe(false) // comprobar que no se imprime el <p> Loading...</p>
        expect (wrapper.find('GifGridItem').length ).toBe(respuesta.length) //comprobar que coincide la longitud del objeto recibido
    })
    
});