import React from 'react'
import '@testing-library/jest-dom'
import {shallow} from 'enzyme'
import { AddCategory} from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={setCategories} />) 
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} />)       
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper ).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', {
            target: { 
                value 
            }
        })
    })

    test('No debe de postear la informacion con submit', () => {
        //expect(wrapper ).toMatchSnapshot()
        wrapper.find('form').simulate('submit', {
            preventDefault(){} 
        })
        expect(setCategories).not.toHaveBeenCalled()

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo'
        // Simular el inputChange
        const input = wrapper.find('input')
        input.simulate('change', {
            target: { 
                value 
            }
        })
        // Simular el submit
        wrapper.find('form').simulate('submit', {
            preventDefault(){} 
        })

        // setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled()

        // El valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('')

    })
    
})
