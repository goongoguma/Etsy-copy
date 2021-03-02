import { Container, ContainerMobile } from '../../style/Header';
import React from 'react';
import Head from './Head';
import Menu from './Menu';
import HeadMobile from './HeadMobile';
import MenuMobile from './MenuMobile';

function HeaderIndex() {
  return (
    <div>
      <h1 style={{position: 'absolute', top: '-99px'}}>Etsy.com</h1>
      <Container>
        <Head />
        <Menu />
      </Container>
      <ContainerMobile>
        <HeadMobile />
        <MenuMobile />
      </ContainerMobile>
    </div>
  )
}

export default HeaderIndex;
