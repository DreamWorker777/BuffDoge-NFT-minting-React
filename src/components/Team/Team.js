import './Team.scss';

import teamLogo from '../../assets/img/ezgif.com-gif-maker_3.gif';
import team1 from '../../assets/img/team/1.png';
import team2 from '../../assets/img/team/2.png';
import team3 from '../../assets/img/team/3.png';
import team4 from '../../assets/img/team/4.png';
import team5 from '../../assets/img/team/5.png';
import team6 from '../../assets/img/team/6.png';

import birdIcon from '../../assets/img/icons/bird.svg';
import birdBlue from '../../assets/img/icons/bird_blue.svg';

export const Team = () => {
    const info = [
        {
            image: team1,
            name: 'alpha',
            role: 'graphic & motion designer',
            link: 'https://twitter.com/1Alpha00'
        },
        {
            image: team2,
            name: 'samer',
            role: 'community manager',
            link: 'https://twitter.com/BuffSamer'
        },
        {
            image: team3,
            name: 'rashid',
            role: 'marketing expert',
            link: 'https://twitter.com/RashidBuff'
        },
        {
            image: team4,
            name: 'dagmus',
            role: 'art director',
            link: 'https://twitter.com/BuffDagmus'
        },
        {
            image: team5,
            name: 'naji',
            role: 'designer',
            link: 'https://twitter.com/BuffNaji'
        },
        {
            image: team6,
            name: 'monir',
            role: 'designer',
            link: 'https://twitter.com/BuffMonir'
        },
    ];

    return (
        <section className="team" id="team">
            <div className="team__title">
                <div className="team__title__anim">
                    <img src={teamLogo} alt="pic"></img>
                </div>

                <div className="team__title__text">
                    <span>team</span>
                </div>
            </div>

            <div className="team__members container">
                {
                    info.map((item, index) => (
                        <div className="team__members__item" key={index}>
                            <div className="team__members__item__pic">
                                <img alt="pic" src={item.image}></img>
                            </div>

                            <div className="team__members__item__desc">
                                <div className="team__members__item__desc__name">
                                    {item.name}
                                </div>
                                <div className="team__members__item__desc__role">
                                    {item.role}
                                </div>
                                <div className="team__members__item__desc__link">
                                    <a href={item.link} target="_blank">
                                        <img className="white" alt="pic" src={birdIcon}></img>
                                        <img className="blue" alt="pic" src={birdBlue}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Team;