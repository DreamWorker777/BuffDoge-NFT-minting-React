import './Vision.scss';
import animation from '../../assets/img/1st-character.gif';

export const Vision = () => {
    return (
        <section className="vision" id="vision">
            <div className="vision__character">
                <img alt="pic" src={animation}></img>
            </div>

            <div className="vision__content">
                <div className="vision__content__title">
                    <span>vision</span>
                </div>

                <div className="vision__content__desc">
                    <p>
                    Talented people should always be able to show the world what they are capable of. Our mission is to make a voice for whoever needs a push in their journey, That's our main goal. <br/><br/>
                    Buff Doges are a collection of 10,000 unique generative characters precisely designed, but they are not alone! Every planet will have its own collection, where they face each other in the Galaxy War game, where our community will be able to access the metaverse and determine their winners while earning money playing their favorite game.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Vision;