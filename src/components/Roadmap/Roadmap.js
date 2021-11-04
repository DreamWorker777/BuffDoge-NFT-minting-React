import { useEffect, useRef, useState } from 'react';

import './Roadmap.scss';
import video from '../../assets/videos/Roadmap.mp4';
import roadmap1 from '../../assets/img/roadmap/10_.png';
import roadmap2 from '../../assets/img/roadmap/25_.png';
import roadmap3 from '../../assets/img/roadmap/50_.png';
import roadmap4 from '../../assets/img/roadmap/75_.png';
import roadmap5 from '../../assets/img/roadmap/100_.png';

export const Roadmap = () => {
    const videoRef = useRef(null);

    const [endTime, setEndTime] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleScroll = () => {
        const videoHeight = videoRef.current.clientHeight;
        const videoDuration = videoRef.current.duration;

        const steps = [
            {
                topPercent: 0.2152,
                time: 2.25
            },
            {
                topPercent: 0.2961,
                time: 4.45
            },
            {
                topPercent: 0.4862,
                time: 7.12
            },
            {
                topPercent: 0.6,
                time: 9.9
            },
            {
                topPercent: 0.8161,
                time: videoDuration,
            },
        ]

        const currentScrollY = window.scrollY;
        const videoScrollY = window.pageYOffset + videoRef.current.getBoundingClientRect().top;

        const offset = currentScrollY + window.innerHeight - videoScrollY;

        console.error(offset, videoHeight);

        if( offset > 0 ) {
            steps.forEach((step) => {
                if( offset > videoHeight * step.topPercent ) {
                    setEndTime(step.time);

                    if( step.time > videoRef.current.currentTime )
                        videoRef.current.play();
                }
            });

        } else {
            videoRef.current.currentTime = 0;
        }
    }

    const handlePlaying = () => {
        const time = videoRef.current.currentTime;
        if( time > endTime ) {
            videoRef.current.pause();
        }
            
    }

    return (
        <section className="roadmap" id="roadmap">
            <div className="roadmap__title">
                <span>roadmap</span>
            </div>

            <div className="roadmap__video">
                <video ref={videoRef} muted onTimeUpdate={ handlePlaying }>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            <div className="roadmap__pictures">
                <div className="roadmap__pictures__pic">
                    <img alt="pic" src={roadmap1}></img>
                </div>
                <div className="roadmap__pictures__pic">
                    <img alt="pic" src={roadmap2}></img>
                </div>
                <div className="roadmap__pictures__pic">
                    <img alt="pic" src={roadmap3}></img>
                </div>
                <div className="roadmap__pictures__pic">
                    <img alt="pic" src={roadmap4}></img>
                </div>
                <div className="roadmap__pictures__pic">
                    <img alt="pic" src={roadmap5}></img>
                </div>
            </div>

            <div className="roadmap__content">
                <div className="roadmap__content__item">
                    <span>2022</span>
                </div>
                <div className="roadmap__content__item">
                    <span>Q1</span>
                    <p>Develop Galaxy War together with our community</p>
                </div>
                <div className="roadmap__content__item">
                    <span>Q2</span>
                    <p>Build our talent support Foundation and collaborate with big names such as sports clubs and social companies.</p>
                </div>
                <div className="roadmap__content__item">
                    <span>Q3</span>
                    <p>TBD..</p>
                </div>
            </div>
        </section>
    )
}

export default Roadmap;