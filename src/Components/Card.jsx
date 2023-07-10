import React from 'react'

export const Card = (props) => {
    const { src, title, authors, description } = props;
    return (
        <div className='card'>
            <img src={src} />
            <div className="bottom">
                <h3 className='cardTitle'>{title}</h3>
                <p className="cardAuthors">{authors}</p>
            </div>
        </div>
    )
}
