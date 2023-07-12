import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./Slider.css";

const Slider = () => {
    const images = [
        "https://m.media-amazon.com/images/I/91xWBRGmh8L._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/81mf-g1-WUL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/71F75NHXTGL._SX3000_.jpg",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
        
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                
                </div>
            </div>
        </Slide>
    );
};

export default Slider;