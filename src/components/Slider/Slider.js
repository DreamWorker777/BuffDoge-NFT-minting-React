import { useRef, useState, useEffect, createRef } from 'react';
import './Slider.scss';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const imageCount = 30;
const images = require.context('../../assets/img/Sliders', true);
const slideImages = [];

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}.png`);
    slideImages.push(image);
}

export const Slider = () => {
    const slideRef = useRef();
    const [slidesToShow, setSlidesToShow] = useState(7);
    const imageRefs = slideImages.map(item => createRef());

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
    };

    const setSlidesCount = () => {
        if( window.innerWidth > 1200 )
            setSlidesToShow(7);
        else if( window.innerWidth > 992 )
            setSlidesToShow(5);
        else if( window.innerWidth > 525 )
            setSlidesToShow(3);
        else
            setSlidesToShow(2);
    }

    useEffect(() => {
        setSlidesCount();
        setInterval(setSlidesCount, 100);
    });

    return (
        <section className="slider">
            <div className="sliderWrapper">
                <Slide easing="ease" {...properties} ref={ slideRef } slidesToShow={slidesToShow}>
                    {slideImages.map((each, index) => (
                        <div key={index} className="slider__eachItem">
                            <div style={{ backgroundImage: `url(${each.default})`}} ref={imageRefs[index]}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </section>
    )
}

export default Slider;