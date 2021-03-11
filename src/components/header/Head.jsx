import React from 'react';
import { Header } from '../header/HeaderComponents/index';

function Head() {
  return (
    <Header>
      <Header.Logo />
      <Header.MidWrapper>
        <Header.Input />
        <Header.SearchButton />
      </Header.MidWrapper>
      <Header.BottomWrapper>
        <Header.SignInButton>Sign in</Header.SignInButton>
      </Header.BottomWrapper>
    </Header>
  )
}

export default Head;
