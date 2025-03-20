import React from 'react';
import PhotoAlbum from "react-photo-album"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../../Images/hermes-rivera-qbf59TU077Q-unsplash.jpg";
import Image2 from "../../Images/joel-muniz-lUK16p_JtCM-unsplash.jpg";
import Image3 from "../../Images/mark-adriane-FH6JcaCrYJ0-unsplash.jpg";




const PhotosVideos = () => {

    const images = [{src: Image1, alt: "A man punching pads"},
              {src: Image2, alt: "A boxing ring"},
              {src: Image3, alt: "Two men sparring"}];

    const carouselCont = {
            width: '40%',  
            height: '33%' ,    
            marginLeft: 'auto',
            marginRight: '50px'   
                 
            };

    const titleCont = {
        fontSize: '20px',
        margin: '0',
        fontFamily: 'Trade Winds, serif',
        marginLeft: 'auto',
        marginRight: '50px'   
                     
        };
                    
                


    return(
        <div style={titleCont}>
            <h3> Photos & Videos </h3>
                <div style = {carouselCont}>
                    <Carousel
                    autoPlay={true}
                    interval={10000} // 10 seconds in milliseconds
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={true}
                    >
                        {images.map((image, index) => (      
                            <div key = {index}>
                                <img src = {image.src} alt = {image.alt}/>
                            </div>
                        ))}


                        
                        
                    

                    
                    </Carousel>
                </div>

        </div>
    );
};

export default PhotosVideos; 










