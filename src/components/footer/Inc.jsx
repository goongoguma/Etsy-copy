import React from 'react';
import { IncWrapper, IncCountryInfo, IncAgreementInfo } from '../../style/Footer';

function Inc() {
  return (
    <IncWrapper>
      <IncCountryInfo>
        <li><i className="fas fa-globe-americas" style={{ marginRight: '9px', fontSize: '16px'}} /> South Korea</li>
        <li style={{borderLeft: '1px solid #fff', borderRight: '1px solid #fff', padding: '0 10px'}}>English (US)</li>
        <li>$ (USD)</li>
      </IncCountryInfo>
      <IncAgreementInfo>
        <li>© 2021 Etsy, Inc.</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Interest-based ads</li>
      </IncAgreementInfo>
    </IncWrapper>
  )
}

export default Inc
