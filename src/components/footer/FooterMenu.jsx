import React, { useState } from 'react';
import Logo from '../../components/footer/Logo';
import { FooterMenuWrapper, FooterSection, FooterSNS, DownloadApp, DownloadAppSection, DownloadAppSectionMobile } from '../../style/Footer';

function FooterMenu() {
  const [isClose, setClose] = useState({
    isShop: true,
    isSell: true,
    isAbout: true,
    isHelp: true
  });
const { isShop, isSell, isAbout, isHelp } = isClose;

  const handleToggle = (str) => {
    switch(str) {
      case 'shop':
        setClose({ ...isClose, isShop: !isShop });
        break;
      case 'sell':
        setClose({ ...isClose, isSell: !isSell });
        break;
      case 'about':
        setClose({ ...isClose, isAbout: !isAbout});
        break;
      case 'help':
        setClose({ ...isClose, isHelp: !isHelp});
        break;
      default:
        setClose({ isShop: false, isSell: false, isAbout: false, isHelp: false });
    } 
  };

  return (
    <FooterMenuWrapper>
      <FooterSection>
        <h5 onClick={() => handleToggle('shop')}>Shop <i className={`fas ${isShop ? 'fa-chevron-down' : 'fa-chevron-up'}`} /></h5>
        <div className={`slider ${isShop ? 'closed' : ''}`}>
          <p>Gift cards</p>
          <p>Etsy blog</p>
        </div>
      </FooterSection>
      <FooterSection>
        <h5 onClick={() => handleToggle('sell')}>Sell <i className={`fas ${isSell ? 'fa-chevron-down' : 'fa-chevron-up'}`} /></h5>
        <div className={`slider ${isSell ? 'closed' : ''}`}>
          <p>Sell on Etsy</p>
          <p>Teams</p>
          <p>Forums</p>
          <p>Affiliates</p>
        </div>
      </FooterSection>
      <FooterSection>
        <h5 onClick={() => handleToggle('about')}>About <i className={`fas ${isAbout ? 'fa-chevron-down' : 'fa-chevron-up'}`} /></h5>
        <div className={`slider ${isAbout ? 'closed' : ''}`}>
          <p>Etsy, Inc</p>
          <p>Policies</p>
          <p>Investors</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Impact</p>
          <p>Legal imprint</p>
        </div>
      </FooterSection>
      <FooterSection>
        <h5 onClick={() => handleToggle('help')}>Help <i className={`fas ${isHelp ? 'fa-chevron-down' : 'fa-chevron-up'}`} /></h5>
        <div className={`slider ${isHelp ? 'closed' : ''}`}>
          <p>Help Center</p>
          <p>Trust and safety</p>
        <p style={{marginBottom: '50px'}}>Privacy settins</p>
        </div>
        <DownloadAppSection>
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
        </DownloadAppSection>
      </FooterSection>
      <DownloadAppSectionMobile>
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
      </DownloadAppSectionMobile>
    </FooterMenuWrapper>
  )
}

export default FooterMenu
