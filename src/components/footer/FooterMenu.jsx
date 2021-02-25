import React from 'react';
import Logo from '../../components/footer/Logo';
import { FooterMenuWrapper, FooterSection, FooterSNS, DownloadApp } from '../../style/Footer';

function FooterMenu() {
  return (
    <FooterMenuWrapper>
        <FooterSection>
          <h5>Shop</h5>
          <p>Gift cards</p>
          <p>Etsy blog</p>
        </FooterSection>
        <FooterSection>
          <h5>Sell</h5>
          <p>Sell on Etsy</p>
          <p>Teams</p>
          <p>Forums</p>
          <p>Affiliates</p>
        </FooterSection>
        <FooterSection>
          <h5>About</h5>
          <p>Etsy, Inc</p>
          <p>Policies</p>
          <p>Investors</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Impact</p>
          <p>Legal imprint</p>
        </FooterSection>
        <FooterSection>
          <h5>Help</h5>
          <p>Help Center</p>
          <p>Trust and safety</p>
          <p style={{marginBottom: '50px'}}>Privacy settins</p>
          <DownloadApp>
            <Logo />
            Download the Etsy App
          </DownloadApp>
          <FooterSNS>
            <li><i className="fab fa-instagram-square" /></li>
            <li><i className="fab fa-facebook-square" /></li>
            <li><i className="fab fa-twitter-square" /></li>
            <li><i className="fab fa-youtube-square" /></li>
          </FooterSNS>
        </FooterSection>
    </FooterMenuWrapper>
  )
}

export default FooterMenu
