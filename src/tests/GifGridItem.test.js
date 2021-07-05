import React from "react";
import { shallow } from "enzyme";
import GifGridItem from '../components/GifGridItem';

describe('Pruebas del componente GifGridItem', () => {

    const title="titulo";
    const url="https://locahost/foto.jpg";
    const wrapper= shallow(<GifGridItem title={ title } url= { url } />); 


    test('Debe mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()
    });


    test('Debe tener un figurecaption con el texto', () => {

        const fig= wrapper.find('figcaption');
        expect(fig.text().trim()).toBe( title )
    });


    test('Debe tener la imagen con src= url y alt= title', () => {

        const img= wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title )
    });


    test('La figura debe pertenecer a la clase foto', () => {

        const figura= wrapper.find('figure');
        expect(figura.prop('className').includes('foto')).toBe( true )
    });
});