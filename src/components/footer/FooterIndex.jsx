import React from 'react';
import Subscribe from './Subscribe';
import FooterMenu from './FooterMenu';
import Inc from './Inc';
import { 
  Container, 
  WholeSubscribeWrapper, 
  WholeFooterMenuWrapper, 
  WholeIncWrapper 
} from '../../style/Footer';

function FooterIndex() {
  return (
    <Container>
      <WholeSubscribeWrapper>
        <Subscribe />
      </WholeSubscribeWrapper>
      <WholeFooterMenuWrapper>
        <FooterMenu />
      </WholeFooterMenuWrapper>
      <WholeIncWrapper>
        <Inc />
      </WholeIncWrapper> 
    </Container>
  )
}

export default FooterIndex;
