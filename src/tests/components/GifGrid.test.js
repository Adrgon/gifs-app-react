import React from 'react'
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFetchGifs'
const { GifGrid } = require("../../components/GifGrid")
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en <GifGrid />', () => {
    const category = "Dragon Ball Z"
    
    test('debe de mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GifGrid category={category} />) 
        expect(wrapper ).toMatchSnapshot()
    })

    test('debe de mostrar items cunado se cargan imagenes useFetchGifs', () => {
       
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },{
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }

    ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( <GifGrid category={category} />) 

        expect(wrapper).toMatchSnapshot()
        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})
