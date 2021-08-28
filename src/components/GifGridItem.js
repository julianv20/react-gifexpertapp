import React from 'react'

export const GifGridItem = ( { id, tittle, url } ) => {
    console.log({id, tittle, url})
    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt={ tittle }></img>
            <p>{ tittle }</p>
        </div>
    )
}
