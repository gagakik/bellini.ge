import React from 'react';
import '../style/header.css'

const Header = () => {
    return (
        <div className='container'>
            <header className="header">
        <div className="left">
       <img src='./img/img/logo_title.png' alt='logo' />
            <div className="header__left__title">
                <h1 className="header__left__title-text">Bellini Beauty Bar</h1>
                <a href="https://www.facebook.com/hashtag/%E1%83%A0%E1%83%9D%E1%83%93%E1%83%94%E1%83%A1%E1%83%90%E1%83%AA%E1%83%91%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%98%E1%83%9C%E1%83%90%E1%83%95/" className="header__left__title-link link" >#როდესაცბრწყინავ #Whenyouareshining</a>
            </div>
        </div>
        <div className="header__right">
            <a href="https://www.facebook.com/bellinibeautybars">Get In Touch</a> 
        </div>
    </header>
    <div className='social'>
            <a href="https://www.facebook.com/hashtag/%E1%83%A0%E1%83%9D%E1%83%93%E1%83%94%E1%83%A1%E1%83%90%E1%83%AA%E1%83%91%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%98%E1%83%9C%E1%83%90%E1%83%95/"><img src='./img/icons/icons8-facebook-50.svg' alt="facebook" /></a>
            <a href="https://www.facebook.com/hashtag/%E1%83%A0%E1%83%9D%E1%83%93%E1%83%94%E1%83%A1%E1%83%90%E1%83%AA%E1%83%91%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%98%E1%83%9C%E1%83%90%E1%83%95/"><img src='./img/icons/icons8-instagram.svg' alt="istagram" /></a>
            <a href="https://www.facebook.com/hashtag/%E1%83%A0%E1%83%9D%E1%83%93%E1%83%94%E1%83%A1%E1%83%90%E1%83%AA%E1%83%91%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%98%E1%83%9C%E1%83%90%E1%83%95/"><img src='./img/icons/icons8-youtube.svg' alt="youtube" /></a>
            <a href="https://www.facebook.com/hashtag/%E1%83%A0%E1%83%9D%E1%83%93%E1%83%94%E1%83%A1%E1%83%90%E1%83%AA%E1%83%91%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%98%E1%83%9C%E1%83%90%E1%83%95/"><img src='./img/icons/icons8-tiktok.svg' alt="youtube" /></a>
        </div>
        </div>
    );
}

export default Header;
