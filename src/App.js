import React from 'react';
import HeaderIndex from './components/header/HeaderIndex';
import BodyIndex from './components/body/BodyIndex';
import FooterIndex from './components/footer/FooterIndex';
import { Container } from './style/Index';

function App() {
  return (
    <Container>
      <HeaderIndex />
      <BodyIndex />
      <FooterIndex />
    </Container>
  );
}

export default App;
