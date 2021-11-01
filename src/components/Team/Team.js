import './Team.scss';

import video from '../../assets/videos/3d Logo animation.mp4'
import team1 from '../../assets/img/team/1.svg';
import team2 from '../../assets/img/team/2.svg';
import team3 from '../../assets/img/team/3.svg';
import team4 from '../../assets/img/team/4.svg';
import team5 from '../../assets/img/team/5.svg';
import team6 from '../../assets/img/team/6.svg';
import team7 from '../../assets/img/team/7.png';

export const Team = () => {
    const info = [
        {
            image: team1,
            name: 'alpha',
            role: 'graphic & motion designer'
        },
        {
            image: team2,
            name: 'samer',
            role: 'community manager'
        },
        {
            image: team3,
            name: 'rashid',
            role: 'marketing expert'
        },
        {
            image: team4,
            name: 'dagmus',
            role: 'art director'
        },
        {
            image: team5,
            name: 'naji',
            role: 'designer'
        },
        {
            image: team6,
            name: 'monir',
            role: 'designer'
        },
        {
            image: team7,
            name: 'superbot',
            role: 'developer'
        }
    ];

    return (
        <section className="team" id="team">
            <div className="team__title">
                <div className="team__title__video">
                    <video autoPlay muted loop>
                        <source src={video} type="video/mp4"/>
                    </video>
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
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Team;