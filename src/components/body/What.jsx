import React from 'react';
import { 
  WhatWrapper, 
  WhatTitle, 
  WhatText,
  WhatTextSection, 
  WhatQuestion ,
  WhatTopSvg
} from '../../style/Body';
import TopRightSVG from '../body/SVG/TopRightSVG';

function What() {
  return (
    <WhatWrapper>
      <div style={{padding: '36px 0', position: 'relative'}}>
        <TopRightSVG />
        <WhatTitle>
          <h3>What is Etsy?</h3>
          <span>Read our wonderfully weird story</span>
        </WhatTitle>
        <WhatText>
          <WhatTextSection>
            <h4>A one-of-a-kind community</h4>
            <span>
              Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique items.
            </span>
          </WhatTextSection>
          <WhatTextSection>
            <h4>Support independent<br />creators</h4>
            <span>
              There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
            </span>
          </WhatTextSection>
          <WhatTextSection>
            <h4>Peace of mind</h4>
            <span>
              Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
            </span>
          </WhatTextSection>
        </WhatText>
        <WhatQuestion>
          <p>Have a question? Well, we’ve got some answers.</p>
          <button>Go to Help Center</button>
        </WhatQuestion>
      </div>
    </WhatWrapper>
  )
}

export default What
