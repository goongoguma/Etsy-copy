import React from 'react';
import { WhatTopSvg } from '../../../style/Body'; 

function TopRightSVG() {
  return (
    <WhatTopSvg>
      <svg 
        xmlns='http://www.w3.org/2000/svg' 
        xmlnsXlink='http://www.w3.org/1999/xlink' 
        width='200' height='200' viewBox='0 0 200 200' 
        preserveAspectRatio='xMidYMid meet' focusable='false'
      >
        <defs>
          <clipPath id='what-is-etsy-right-top-ClipPath1033'>
            <path d='M126.4,161c-3-3.7-9-12.5-9-12.5L114,141c0,0-4-12.4-4.3-17.1c-0.6-9.3,1.9-16,5.6-24.5     
            c7.2-16.3,21.8-27.1,40.5-31.8l3.8-1.5l1.2-1.4l-14.5-48.9l-4.9-12.1c-2.9,0.5-8.4,2.9-11.1,3.6c-12.1,3.2-22,8.6-32.1,13.9     
            C87,27.8,69.3,45.2,69.3,45.2S52.8,62.3,47.8,74.8c-1.6,4.7-3,9.5-4,14.3C42,96,40.7,111.6,39.4,119c-1.4,8,2.8,27.8,2.8,27.8     
            s3,11.6,5.7,18.7c4.4,11.3,10.8,21.8,18.9,30.9c0,0,24.3-12.4,26.2-13.9s16.4-9,17.6-9.6c1.2-0.6,12.6-4.4,12.6-4.4l6-2.8     
            c0.2-0.3,0.3-0.7,0.4-1.1C129.6,164.4,126.5,161,126.4,161' fill='#faa129'/>
          </clipPath>
        </defs>
        <g transform='matrix(1,0,0,1,0,0)'>
          <image 
            width='200' 
            height='200' 
            transform='matrix(1,0,0,1,0,0)' 
            xlinkHref='https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_yellow.jpg' 
            clipPath='url(#what-is-etsy-right-top-ClipPath1033)'
            style={{transformOrigin: '100px 100px'}} />
        </g>
      </svg>
    </WhatTopSvg>
  )
}

export default TopRightSVG
