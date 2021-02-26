import React from 'react';
import { SubscribeMobileWrapper } from '../../style/Footer';

function SubscribeMobile() {
  return (
    <SubscribeMobileWrapper>
      <h4>Get unique gift ideas and so much<br /> more delivered right to your inbox.</h4>
      <div>
        <input type='text' placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </SubscribeMobileWrapper>
  )
}

export default SubscribeMobile
