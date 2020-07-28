import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

// VAulZwy6ZcX7NjTpD4x0yLqhALMp6No5
import { GifGridItem } from './GifGridItem'
export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category)

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        { loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className="card-grid"> 
                {images.map((img)=>(
                    <GifGridItem
                        key={img.id}  
                        {...img}
                    />
                ))}
        </div> 
        </>
    )
}
