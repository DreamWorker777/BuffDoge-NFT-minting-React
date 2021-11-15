import './Galaxy.scss';
import animation from '../../assets/img/2nd-character.gif';

export const Galaxy = () => {
    return (
        <section className="galaxy" id="story">
            <div className="galaxy__content">
                <div className="galaxy__content__title">
                    <span>Galaxy War</span>
                </div>

                <div className="galaxy__content__desc">
                    <p>
                    4 planets lived in peace for a long time. These planets held a peace treaty that renews every 25 years.<br/> Renewal time has come but suddenly a communication failure occurred which drove a huge panic between the populations. It seems that The war is back and nothing will be the same ever again.
                    </p>
                </div>
            </div>

            <div className="galaxy__character">
                <img alt="pic" src={animation}></img>
            </div>
        </section>
    )
}

export default Galaxy;