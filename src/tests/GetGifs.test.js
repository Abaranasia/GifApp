import { getGifs } from '../components/GetGifs';

describe('Pruebas de GetGifs fetch', () => {

    test('Debe traer 12 elementos ', async () => {
        
        const gifs= await getGifs('Gantz');

        expect(gifs.length).toBe(12)
    })
    
    test('Debe traer 12 elementos ', async () => {
        
        const gifs= await getGifs('');

        expect(gifs.length).toBe(0)
    })
    
});