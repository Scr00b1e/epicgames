import React from 'react'
import './footer.scss'

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className='footer__top'>
                    <img src="./img/icon2.png" alt="" />
                    <div className="footer__socials">
                        <p>
                            Repository <a href="https://github.com/Scr00b1e/epicgames" target='_blank' rel='noreferrer'>link</a> or
                        </p>
                        <a href="https://github.com/Scr00b1e/epicgames" target='_blank' rel='noreferrer'>
                            <img src="./img/github.png" alt="" />
                        </a>
                    </div>
                    <button className='footer__btn'>
                        <img src="./img/strelka3.png" alt="" />
                    </button>
                </div>
                <div className='footer__bottom'>
                    <p>Developed by <a href="https://github.com/Scr00b1e" target='_blank' rel='noreferrer'>scr00b1e</a> and <a href="https://github.com/sa1kunX" target='_blank' rel='noreferrer'>sa1kunX</a></p>
                </div>
            </div>
        </div>
    )
};

export default Footer