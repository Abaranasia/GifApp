
import React from "react";
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { GifApp } from '../GifApp';

describe('Pruebas de GifApp', () => {

    
    test('Debe mostrarse correctamente', () => {
        const wrapper= shallow(<GifApp />);

        expect(wrapper).toMatchSnapshot();
    })
    test('Debe mostrar una lista de categorias', () => {
        const categorias = ['cats', 'dogs'] //no podemos enviar datos al useState, por lo tanto creamos un array como alternativa que le pasamos al prop defaultCategories, justo para eso
        const wrapper= shallow(<GifApp defaultCategories={categorias}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })
    
/*     test('Debe llamar a AddCati con una categoria de prop:', () => {
    
        const cati="One Punch";
       // const wrapper= shallow(<AddCati categoria ={cati} />);
    })
    
    test('Debe llamar a GifGrid con una key y una categoria de props:', () => {
        
    }) */
    
});