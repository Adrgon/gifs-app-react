import React from 'react'
import PropTypes from 'prop-types'
const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas en <GifGridItem />', ()=>{
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={ title } url={ url } /> )
    
    
    test('debe mostrar el componente correctamente', ()=>{
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener un h4 con el title', () => {
        const h4 = wrapper.find('h4');
        expect(h4.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        expect( img.prop('src')).toBe(url)
        expect( img.prop('alt')).toBe(title)
    })
    
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect( className.includes('animate__fadeIn')).toBe(true)
    })
        
})

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}