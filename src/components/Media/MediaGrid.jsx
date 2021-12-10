import React from 'react'

const MediaGrid = ({imgUrl}) => {
    return (
        <div>
            <img className="w-full h-full" src={imgUrl} alt="media" />
        </div>
    )
}

export default MediaGrid
