import React from 'react';
import { SubscribeWrapper, InputWrapper, EmailInput, SubscribeButton } from '../../style/Footer';

function Subscribe() {
  return (
    <SubscribeWrapper>
      <h4>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Etsy.</h4>
      <InputWrapper>
        <EmailInput type='text' placeholder='Enter your email' />
        <SubscribeButton>Subscribe</SubscribeButton>
      </InputWrapper>
    </SubscribeWrapper>
  )
}

export default Subscribe
