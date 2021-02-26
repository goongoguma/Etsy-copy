import React from 'react';
import Find from './Find';
import Items from './Items';
import Selections from './Selections';
import What from './What';
import SubscribeMobile from './SubscribeMobile';
import { Container, WholeWidthWrapper, WholeWhatWrapper } from '../../style/Body';
import BottomSVG from '../body/SVG/BottomSVG';

function BodyIndex() {
  return (
    <Container>
      <WholeWidthWrapper>
        <Find />
      </WholeWidthWrapper>
      <Items />
      <Selections />
      <SubscribeMobile />
      <WholeWhatWrapper>
        <What />
        <BottomSVG />
      </WholeWhatWrapper>
    </Container>
  )
}

export default BodyIndex;
