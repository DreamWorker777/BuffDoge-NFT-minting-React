import './Intro.scss';

import intro_video from '../../assets/videos/web main page.mp4';
import mobile_video from '../../assets/videos/phone first page.mp4';
import bottom from '../../assets/img/introBottom.svg';

export const Intro = () => {
    return (
        <section className="intro" id="mint">
            <div className="intro__video">
                <video autoPlay loop muted className="intro__video__web">
                    <source src={intro_video} type="video/mp4"/>
                </video>

                <video autoPlay loop muted className="intro__video__mobile">
                    <source src={mobile_video} type="video/mp4"/>
                </video>
            </div>

            <div className="intro__mintBtn">
                <button>MINT</button>
            </div>

            <div className="intro__bottom">
                <img alt="pic" src={bottom}></img>
            </div>
        </section>
    )
}

export default Intro;