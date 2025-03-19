import React from 'react';
import PhotoAlbum from "react-photo-album"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const PhotosVideos = () => {

    const images = [{src: "../../Images/mark-adriane-FH6JcaCrYJ0-unsplash.jpg", alt: "A man punching pads"},
              {src:"../../Images/joel-muniz-lUK16p_JtCM-unsplash.jpg", alt: "A boxing ring"},
              {src:"../../Images/hermes-rivera-qbf59TU077Q-unsplash.jpg", alt: "Two men sparring"}];

            


    return(
        <div className='PhotosVideos'>
            <h3> Photos & Videos </h3>
            <Carousel>
                {images.map((image, index) => (      
                    <div key = {index}>
                        <img src = {image.src} alt = {image.alt}/>
                    </div>
                ))}


                
                
                
                

             
            </Carousel>
        </div>
    );
};

export default PhotosVideos; 
