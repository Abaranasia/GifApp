import  useFetchGifs  from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
jest.setTimeout(10000);

/* Para evaluar el comportamiento d eun hook empleamos https://react-hooks-testing-library.com/installation */

describe('Pruebas del hook useFetchGifs', () => {
    
/*     test('Debe retornar el estado inicial',  () => {
     
        const { result } =renderHook( () => {
            return useFetchGifs ('Gantz') 
        }); //esta herramienta permite testear el comportamiento de hooks

        const { data, loading }= result.current; //tomamnos los datos actuales devueltos desestructurados para operar con ellos      

        console.log (data, loading);

        expect( data ).toEqual([]); //el esado inicial es un array vacío
        expect( loading ).toBe(true); //el estado actual es no cargado
    })  
 */

     test('Debe retornar el estado inicial', async () => {
     
        
        const { result, waitForNextUpdate } =renderHook( () => useFetchGifs( 'Gantz' ) ); //esta herramienta permite testear el comportamiento de hooks
        const { data, loading }= result.current; //tomamnos los datos actuales devueltos desestructurados para operar con ellos      

        await waitForNextUpdate({timeout:3000});     

        expect( data ).toEqual([]); //el esado inicial es un array vacío
        expect( loading ).toBe(true); //el estado actual es no cargado
    })
    
    test('Debe retornar un array con 12 resultados y loading false', async () => {
     
        

        const { result, waitForNextUpdate } =renderHook( () => useFetchGifs( 'Gantz' ) ); //esta herramienta permite testear el comportamiento de hooks
        await waitForNextUpdate({timeout:3000});

        const { data, loading }= result.current; //tomamnos los datos actuales devueltos desestructurados para operar con ellos

        expect( data.length ).toBe(12); //el esado inicial es un array vacío
        expect( loading ).toBe(false); //el estado actual es no cargado
    }) 
    
});