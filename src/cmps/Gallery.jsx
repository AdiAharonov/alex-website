import React, { useState, useEffect } from 'react'
import { BuissnesService } from '../services/buissnes-service'

export function Gallery() {

    const [photos, setPhotos] = useState();

    useEffect(() => {
        setPhotos(BuissnesService.getPhotos)
      }, []);

    return (
        <div className="gallery">
            {photos && photos.map((photo, idx) => <img src={photo} alt="" className="gallery-img" key={idx} />)}
        </div>
    )
}
