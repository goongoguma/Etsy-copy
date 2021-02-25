import React from 'react';
import Head from './Head';
import Menu from './Menu';
import { Container } from '../../style/Header';

function HeaderIndex() {
  return (
    <Container>
      <h1 style={{position: 'absolute', top: '-99px'}}>Etsy.com</h1>
      <Head />
      <Menu />
    </Container>
  )
}

export default HeaderIndex;
