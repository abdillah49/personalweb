import React from 'react';
import Images from './Images';

import ImgLinkedin from '../assets/images/linkedin.png';
import ImgWhatsapp from '../assets/images/whatsapp.png';
import ImgFacebook from '../assets/images/facebook.png';
import ImgInstagram from '../assets/images/instagram.png';
import ImgTwitter from '../assets/images/twitter.png';

const About = () => {
    return (
        <div id="about">
            <h1 className="noback"><span>About</span> Me</h1>
            <div className="sub-title">UI / UX Designer &amp; Web Developer</div>
            <div className="sub">
                <p>
                    Saya Muhammad Abdillah, Web Developer dari Medan, Indonesia. Saya memiliki pengalaman yang kaya dalam desain, pembangunan situs web dan kustomisasi, bahasa pemrograman yang saya kuasai PHP, MySQL, JQuery, HTML5, CSS3. Jelajahi portofolio saya dan temukan sisi kreatif dari keberadaan saya. Cukup katakan untuk saat ini, mulailah menggulir.
                </p>
                <h2>Roaming Outside The Box</h2>
                <p>
                    Saya tidak pernah puas dengan tren dan mode terkini yang beredar di Web. Kreativitas, saya yakin tidak akan pernah berkembang kecuali kita berpikir secara bebas, tidak terikat oleh aturan lama, atau pun aturan lainnya.
                </p>
                <ul className="sosmed">
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammad-abdillah-19737b9b/"><Images src={ImgLinkedin} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://wa.link/y25fmu"><Images src={ImgWhatsapp} alt="whatsapp" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/m.abdillah49"><Images src={ImgFacebook} alt="facebook" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/m.abdillah48"><Images src={ImgInstagram} alt="instagram" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/abdillah163188"><Images src={ImgTwitter} alt="twitter" /></a></li>
                    <div className="clear"></div>
                </ul>	
            </div>
        </div>
    );
}

export default About;