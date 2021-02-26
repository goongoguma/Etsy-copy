import React from 'react';
import { IncWrapper, IncCountryInfo, IncAgreementInfo, IncCountiryInfoCenter } from '../../style/Footer';

function Inc() {
  return (
    <IncWrapper>
      <IncCountryInfo>
        <li style={{paddingRight: '10px'}}><i className="fas fa-globe-americas" style={{ marginRight: '9px', fontSize: '16px'}} /> South Korea</li>
        <IncCountiryInfoCenter>English (US)</IncCountiryInfoCenter>
        <li style={{padding: '0 10px'}}>$ (USD)</li>
      </IncCountryInfo>
      <IncAgreementInfo>
        <li className='info-first'>© 2021 Etsy, Inc.</li>
        <div style={{flexBasis: '100%', height: '0'}}></div>
        <li>Terms of Use</li>
        <li className='info-third'>Privacy</li>
        <li>Interest-based ads</li>
      </IncAgreementInfo>
    </IncWrapper>
  )
}

export default Inc
