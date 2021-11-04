import { Link } from 'react-scroll'

import './NavBar.scss';
import logoIcon from '../../assets/img/icons/logo.svg';
import twitterIcon from '../../assets/img/icons/twitter.svg';
import discordIcon from '../../assets/img/icons/discord.svg';
import openseaIcon from '../../assets/img/icons/opensea.svg';

import pdf from '../../assets/Buff_Paper.pdf';

export const NavBar = () => {
    const menu = [
        {
            name: 'Mint',
            to: 'mint'
        },
        {
            name: 'story',
            to: 'story'
        },
        {
            name: 'vision',
            to: 'vision'
        },
        {
            name: 'Roadmap',
            to: 'roadmap'
        },
        {
            name: 'Team',
            to: 'team'
        },
        {
            name: 'faqs',
            to: 'faq'
        },
    ];

    return (
        <header className="navBar">
            <div className="navBar__paper">
                <a href={pdf} target="_blank"><span>BUFF PAPER</span></a>
            </div>

            <div className="container">

                <div className="navBar__logo">
                    <div className="navBar__logo__icon">
                        <img alt="img" src={logoIcon}></img>
                    </div>
                    <div className="navBar__logo__title">
                        BuffDoge
                    </div>
                </div>
                <div className="navBar__menu">
                    {
                        menu.map((item, index) => (
                            <Link
                                key={index}
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                to={ item.to }
                                offset={ index !== 0 ? -50 : 0 }
                            >
                                { item.name }
                            </Link>
                        ))
                    }
                </div>

                <div className="navBar__buttons">
                    <a href="#javascript;">
                        <span></span>
                        <img alt="img" src={twitterIcon}></img>
                    </a>
                    <a href="#javascript;">
                        <span></span>
                        <img alt="img" src={discordIcon}></img>
                    </a>
                    <a href="#javascript;">
                        <span></span>
                        <img alt="img" src={openseaIcon}></img>
                    </a>
                    <button className="navBar__walletBtn">CONNECT WALLET</button>
                </div>
            </div>
        </header>
    )
}

export default NavBar;