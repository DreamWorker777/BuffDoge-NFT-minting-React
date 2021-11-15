import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'

import './NavBar.scss';
import logoIcon from '../../assets/img/icons/logo.svg';
import twitterIcon from '../../assets/img/icons/twitter.svg';
import discordIcon from '../../assets/img/icons/discord.svg';
import openseaIcon from '../../assets/img/icons/openseaGrey.svg';
import instagramIcon from '../../assets/img/icons/instagram.svg';

import pdf from '../../assets/Buff_Paper.pdf';

export const NavBar = () => {
    const [active, setActive] = useState('active');
    const [lastScroll, setLastScroll] = useState(0);

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


    const handleScroll = (event) => {
        if( window.scrollY <= lastScroll ) {
            setActive('active');
        } else {
            setActive('');
        }

        setLastScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className={`navBar ${active}`}>
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
                    <a href="https://www.instagram.com/buffdogenft/" target="_blank">
                        <span></span>
                        <img alt="img" src={instagramIcon}></img>
                    </a>
                    <a href="https://twitter.com/BuffDogeNFT" target="_blank">
                        <span></span>
                        <img alt="img" src={twitterIcon}></img>
                    </a>
                    <a href="https://discord.gg/sVtpaCy7S2" target="_blank">
                        <span></span>
                        <img alt="img" src={discordIcon}></img>
                    </a>
                    <a href="#javascript;" className="noAnimation">
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