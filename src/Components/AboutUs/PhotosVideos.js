import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from "../../Images/hermes-rivera-qbf59TU077Q-unsplash.jpg";
import Image2 from "../../Images/joel-muniz-lUK16p_JtCM-unsplash.jpg";
import Image3 from "../../Images/mark-adriane-FH6JcaCrYJ0-unsplash.jpg";


// Reduces gaps in carousel to fit in container correctly
const customStyles = `
  .carousel-root .thumbs-wrapper {
    margin: -15px 0 !important; 
  }
  
  .carousel .thumb {
    padding: 0 !important; 
    margin-right: 4px !important; 
  }
  
  .carousel .thumbs {
    padding: 0 !important;
  }
`;


//Returns an image carousel using photos from array
const PhotosVideos = () => {

    //Array to hold images & alt text
    const images = [
        {src: Image1, alt: "A man punching pads"},
        {src: Image2, alt: "A boxing ring"},
        {src: Image3, alt: "Two men sparring"}
    ];

    //Styles for carousel container
    const carouselCont = {
        width: '70%',
        height: '25%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px'  
                 
        };

    //Styles for Title
    const titleCont = {
        fontSize: '25px',
        fontFamily: 'Trade Winds, serif',
        textAlign: 'center',
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10px'
                     
        };
                    
                

    return(
        <div>
            <style>{customStyles}</style>
            <div style={titleCont}> 
                Photos & Videos
            </div>
                <div style = {carouselCont}>
                    <Carousel
                    autoPlay={true} //Continuously cycle
                    interval={10000} //Set to 10 seconds
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










