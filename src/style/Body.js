import styled from 'styled-components';

// BodyIndex
export const Container = styled.div`
  text-align: center;
`;

export const WholeWidthWrapper = styled.div`
  background-color: #DDEBE3;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`;

// Find 
export const FindTitle = styled.h2`
  margin: 0;
  padding: 30px 12px 12px 12px;
  font-weight: 300;
  font-size: 32px;
  letter-spacing: .5;
  @media (max-width: 768px) {
   font-size: 24px;
   font-weight: 300;
   letter-spacing: .5px;
   line-height: 28px;
   padding: 24px 12px 6px 12px;
  }
`;

export const FindDesc = styled.p`
  margin: 0;
  padding-bottom: 12px;
  font-weight: 500;
  font-size: 20px;
`;

export const FindWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto; 
`;

export const FindListWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const FindListLi = styled.li`
  cursor: pointer;
  list-style: none;
  & i {
    position: absolute;
    line-height: 20px;
    margin-left: 10px;
  }
  &:hover {
    & i {
      transition: 0.1s ease-in;
      margin-left: 15px;
    }
  }
`;

export const FindImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 106px;
    height: 106px;
  }
`;

export const ImageText = styled.p`
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  text-align: center; 
  }
`;

// Items
export const ItemWrapper = styled.div`
  margin: 12px 36px 18px;
  & h3 {
    font-size: 28px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    margin: 12px 12px 18px;
  }
`;

export const ItemText = styled.ul`
  display: flex;
  padding: 0 20px;
`;

export const ItemTextList = styled.div`
  list-style: none;
  cursor: pointer;
  width: 16.6%;
  padding-bottom: 10px;
  position: relative;
  display: inline-block;
  @media (max-width: 768px) {
    display: none;
  }
  &::after {
    content: '';
    bottom: 0;
    display: block;
    height: 2px;
    position: absolute;
    background: #DEDEDE;
    width: 100%;
  }
  &::before {
    content: '';
    bottom: 0;
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #B8B8B8;
    width: 0;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }
  &:hover:before {
    width: 100%;
    z-index: 99;
    left: 0;
  }
`;

export const ItemTextListSelected = styled.div`
  list-style: none;
  cursor: pointer;
  width: 16.6%;
  padding-bottom: 10px;
  position: relative;
  display: inline-block;
  &::before {
    content: '';
    bottom: 0;
    display: block;
    height: 2px;
    position: absolute;
    background: #181818;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ItemImageList = styled.div`
  display: flex;
  padding: 0 20px;
  opacity: 0;
  animation: 300ms fadeIn forwards;
  animation-timing-function: cubic-bezier(0.175, 0.745, 0.425, 1.11);
  @keyframes fadeIn {
    0% {
      transform: translateX(-36px);
      opacity: 0;
    }
    100% { 
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

export const ItemImageLayout = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  text-align: left;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ItemImageLayoutSecondLine = styled.div`
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

export const ItemImageWrapper = styled.div`
  padding: 0 10px;
`

export const ItemPrice = styled.p`
  margin: 10px 0 5px 0;
  font-weight: 500;
`;

export const Bestseller = styled.div`
  margin: 6px 0 0 0;
  font-size: 11px;
  background: #FDEBD2;
  display: block;
  padding: 2px 0 2px 5px;
  font-weight: 500;
  border-radius: 40px;
  width: 59px;
`;

export const FreeShipping = styled.p`
  margin: 6px 0 0 0;
  font-size: 11px;
  background: #D4E9D7;
  display: block;
  padding: 3px;
  font-weight: 500;
  border-radius: 40px;
  width: 80px;
  padding: 2px 0 2px 4px;
`;

export const DiscountPrice = styled.span`
  margin: 0;
  text-decoration-line: line-through;
  color: #258635;
  font-size: 14px;
`;

export const DiscountRate = styled.span`
  color: #258635;
  font-size: 14px;
`;

export const VisitShop = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 13px;
    font-weight: 300;
    margin: 20px 0;

    & i {
      font-size: 10px;
      font-wegith: 100;
      margin-left: 5px;
    }
  }
`

// Selections
export const SelectionsWrapper = styled.div`
  padding: 18px 0px;
  text-align: left; 
`

export const SelectionsTitle = styled.div`
  & h2 {
    font-size: 16px;
    display: inline-block;
  }
  & p {
    font-size: 13px;
    display: inline-block;
    margin: 0 20px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SelectionsItemWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0 15px;
  }
`;

export const SelectionsItem = styled.li`
  list-style: none;
  border: 1px solid #DEDEDE;
  border-radius: 12px;
  cursor: pointer;
  transition: box-shadow .3s;
  &:hover {
    box-shadow: 0 0 20px rgba(33,33,33,.2);
  }
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  & p {
      padding: 0 0 20px 10px;
      font-weight: 500;
      width: 190px;
      @media (max-width: 768px) {
        width: 150px;
        padding: 0;
        font-size: 13px;
        font-weight: 700;
        padding-left: 10px;
    }
  }
`;

export const SelectionItemImage = styled.div`
  width: 204px;
  height: 162px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

  @media (max-width: 768px) {
    width: 160px;
    height: 127px;
  }
`

// What
export const WholeWhatWrapper = styled.div`
  background-color: #FDEBD2;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  overflow: hidden;
`
export const WhatWrapper = styled.div`
  padding: 36px;
  margin-top: 30px;
  max-width: 1400px;
  margin: 0 auto; 
`;

export const WhatTitle = styled.div`
  & h3 {
    font-size: 44px;
    line-height: 48px;
    font-weight: 300;
    margin: 20px 0;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  & span {
    font-size: 15px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const WhatText = styled.div`
  padding: 36px 18px 0;

  @media (max-width: 768px) {
    padding: 36px 0 0;
  }
`;

export const WhatTextSection = styled.section`
  display: inline-block;
  width: 33.33%;
  vertical-align: top;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    padding: 20px 0;
  }

  & h4 {
    font-size: 32px;
    font-weight: 300;
    margin: 0 0 6px 0;
    @media (max-width: 768px) {
      font-size: 24px;
      font-weight: 300;
    }
  }

    & span {
      font-weight: 300;
      line-height: 28px;
    }
  }
`

export const WhatQuestion = styled.div`
  margin-top: 35px;
  & p {
    font-size: 20px;
    font-weight: 500;
  }
  & button {
    width: 170px;
    height: 50px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    background: transparent;
    border: 2px solid black;
    outline: none;
    cursor: pointer;
  }
`;

export const WhatTopSvg = styled.span`
  position: absolute;
  right: -50px;
  top: -85px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WhatBotLeftSVG = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WhatBotRightSVG = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;