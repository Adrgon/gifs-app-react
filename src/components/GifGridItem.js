import React from 'react'

export const GifGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__bounce">
            <h4>{title}</h4>
            <img src={url} alt={title}/>
        </div>
    )
}
