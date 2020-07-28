import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp =()=> {
const [categories, setCategories]= useState(["One Pounc"])

/* 
const handleClick = () => {
    //setCategories([...categories, "HunterXHunter"]);
    setCategories( cats => [...cats, 'HunterXHunder'])
}
 */
    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </>
    )
}
