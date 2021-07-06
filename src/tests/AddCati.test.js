import React from "react";
import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import Addcati from '../components/AddCati';

describe('Pruebas para <AddCati />', () => {
    
    
    //const setCategory= () => {}; //Función dummy para superar el test que exige una propiedad de tipo función
    
    const setCategory= jest.fn();  //Función dummy (via Jest) para superar el test que exige una propiedad de tipo función
    let wrapper = shallow(<Addcati setcategorias={setCategory} />); // esta inicialización no es necesaria por el beforeeach

    beforeEach(() => {
        jest.clearAllMocks(); //reinicializa los datos dummy antes de cada prueba
        wrapper = shallow(<Addcati setcategorias={setCategory} />);
    })

    test('Debe mostrarse correctamente ', () => { //comprobar que cumple el snapshot
     
      expect(wrapper).toMatchSnapshot();
    })
    


    test('Debe cambiar la caja de texto ', () => { //comprobar que se ejecuta el evento onChange

        const input = wrapper.find('input');
        const value= "hola mundo";

        input.simulate('change', {target: {value}}) //simulamos el envío de un valor al evento change
        
        expect(wrapper.find('p').text().trim()).toBe(value);
    })


    test('Debe probar el submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
         
        expect (setCategory).not.toHaveBeenCalled()
    })
      

    test('Debe llamar a setcaterorias y limpiar la caja del input', () => {
        
        // 1.- Simulamos el change con un valor
        const value= "hola mundo";
        wrapper.find('input').simulate('change', {target: {value}}) //simulamos el envío de un valor al evento change

        // 2.- Simulamos el submit con dicho valor
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        // 3.- SetCategorias se llama al menos una vez
        expect (setCategory).toHaveBeenCalled();
        expect (setCategory).toHaveBeenCalledTimes(1);
        expect (setCategory).toHaveBeenCalledWith( expect.any(Function)); //que setCategorias sea una función

        // 4.- Evaluar si caja de texto se vacía tras el submit
        expect (wrapper.find('input').prop('value')).toBe('')
    })
});