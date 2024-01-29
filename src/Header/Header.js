import React from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import searchIcon from '../assets/icons/search.png';


const Header = () => {
    return (
        <nav className="header__navigation">
        <div className="navigation">
            <button className="arrow-left">
                <img src= {smallLeft}/>
            </button>
            <button className="arrow-right">
                <img src={smallRight} alt="" />
            </button>
        
            <div className="header__search">
                <img src={searchIcon} alt="" />
                    <input id="search-input" maxLength="800" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                      placeholder="O que você quer ouvir?" />
            </div>
        </div>
        
        <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
        </div>
        </nav>
    )
};

export default Header;