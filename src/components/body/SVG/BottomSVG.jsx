import React from 'react';
import { WhatBotLeftSVG, Clearfix } from '../../../style/Body';

function BottomSVG() {
  return (
    <>
      <div style={{ position: 'absolute', bottom: '0' }}>
        <WhatBotLeftSVG>
          <svg 
            xmlns='http://www.w3.org/2000/svg' 
            xmlnsXlink='http://www.w3.org/1999/xlink' 
            width='200' height='200' viewBox='0 0 200 200' 
            preserveAspectRatio='xMidYMid meet' focusable='false'
          >
            <defs>
              <clipPath id='what-is-etsy-left-blue-light-ClipPath1019'>
                <path d='M0.9,94.3c0,0-5.7-39.7,39.7-59.5c18.7-4.6,78.4-14,124.4,26.8c37.4,32.9,41.7,44.7,24.9,78.4     
                c-6.6,11.4-24.8,29.7-81.8,29.7c-33.2-0.6-64.8-12.9-78.5-25.8C10.2,129.4,2.9,113.4,0.9,94.3' fill='blue' />
              </clipPath>
            </defs>
            <g transform='matrix(1,0,0,1,-99,100)'>
            <image 
              width='200' 
              height='200' 
              transform='matrix(1.0606601717798214,1.0606601717798212,-1.0606601717798212,1.0606601717798214,0,0)' 
              xlinkHref='https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_blue_light2.jpg' 
              clipPath='url(#what-is-etsy-left-blue-light-ClipPath1019)'
              style={{transformOrigin: '150px 150px'}} />
            </g>
          </svg>
        </WhatBotLeftSVG>

        <span style={{ position: 'absolute', left: '35px' }}>
          <svg 
            xmlns='http://www.w3.org/2000/svg' 
            xmlnsXlink='http://www.w3.org/1999/xlink' 
            width='200' height='200' viewBox='0 0 200 200' 
            preserveAspectRatio='xMidYMid meet' focusable='false'
            style={{clipPath: 'circle(15%)'}}
          >
            <defs>
              <clipPath id='what-is-etsy-left-blue-dark-ClipPath1059'>
                <path d='M192.9,74.8c-2.1-5.3-3.9-10.8-5.3-16.4c-3.8-16.9-24.3-38.6-33.2-46.7    
                c-8.9-8.1-26.8-9.5-38.6-7.5C93.6,7.8,71.4,9,51.9,21.2C47.3,24.1,27.7,39,22.7,43.3C10.7,53.7,2.5,66.1,2.2,83.6     
                c-1,8.3,3.3,17.4,2.7,26.4c-1.6,26.1,13.6,45.1,26.8,65c7.5,11.3,60.8,22.8,70.8,21.6c14.7-1.8,29.1-5.4,42.8-10.9     
                c11.2-4.2,20.5-12.4,26.1-23.1c1.8-3,3.8-5.9,6.2-8.5c19.6-23.7,25.8-49.9,15.5-79.3' fill='#232347' />
              </clipPath>
            </defs>
            <g>
            <image 
              width='200' 
              height='200' 
              xlinkHref='https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_blue2.jpg' 
              clipPath='url(#url(#what-is-etsy-left-blue-dark-ClipPath1059)'
              style={{transformOrigin: '100px 100px'}} />
            </g>
          </svg>
        </span>
      </div>

      <span style={{ position: 'absolute', bottom: '0', right: '0'}}>
        <svg 
          xmlns='http://www.w3.org/2000/svg' 
          xmlnsXlink='http://www.w3.org/1999/xlink' 
          width='200' height='200' viewBox='0 0 300 200' 
          preserveAspectRatio='xMidYMid meet' focusable='false'
        >
          <defs>
            <clipPath id='what-is-etsy-right-bottom-ClipPath1045'>
              <path d='M-1,46.5l8.6,52.6l9.9,59.8l72.9-6l106.4-7.3l4.1-47L201,41l-106,2L-1,46.5z' fill='#f1641e' />
            </clipPath>
          </defs>
          <g transform='matrix(1,0,0,1,100,100)'>
          <image 
            width='200' 
            height='200' 
            transform='matrix(1.378730854217091,-0.24310744873370377,0.24310744873370377,1.378730854217091,0,0)'
            xlinkHref='https://img0.etsystatic.com/site-assets/brand-refresh/textures/custom/what_is_etsy_orange2.jpg' 
            clipPath='url(#what-is-etsy-right-bottom-ClipPath1045)'
            style={{transformOrigin: '140px 140px'}} />
          </g>
        </svg>
      </span>
    </>
  )
}

export default BottomSVG
