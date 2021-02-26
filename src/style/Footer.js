import styled, { css }  from 'styled-components';

const IncUl = css`
  list-style: none;
  flex: 1;
  display: flex;
  font-size: 13px;
  padding: 0
`

export const Container = styled.div`
  margin-top: 24px;
`;

// subscribe
export const SubscribeMobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: #D7E6F5;
    padding: 20px;
    margin: 0 20px 40px 20px;
    border-radius: 7px;
    & h4 {
      margin: 0;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    & div {
      padding: 15px 0;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      border-radius: 30px;
      box-shadow: 1px 2px 4px 0 rgb(34 34 34 / 10%) inset;
    }
    & input {
      margin-left: 15px;
      flex: 60%;
      border: none;
      font-size: 16px;
      &:focus {
        outline: none;
      }
    }
    & button {
      border: none;
      background: #fff;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      font-size: 16px;
      font-weight: 700;
      flex: 40%;
      &:focus {
        outline: none;
      }
    }
  }
`;
export const WholeSubscribeWrapper = styled.div`
  background-color: #D7E6F5;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  padding: 30px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubscribeWrapper = styled.div`
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h4 {
    font-weight: 500;
  }
`;

export const InputWrapper = styled.div`
  width: 23%;
  background: #fff;
  display: flex;
  padding: 12px 12px 12px 18px;
  border-radius: 20px;
`;

export const EmailInput = styled.input`
  width: 50%;
  flex: 1;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const SubscribeButton = styled.button`
  border: none;
  background: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

// footerMenu
export const WholeFooterMenuWrapper = styled.div`
  background-color: #2E456C;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  color: #fff;
`;

export const FooterMenuWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 15px 30px 0 30px;
    flex-wrap: wrap;
  }
`;

export const FooterSection = styled.section`
  & h5 {
    font-size: 16px;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
  & .fa-chevron-down {
    display: none;
  }
  & p {
    font-size: 13px;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    & .fa-chevron-down {
      display: block;
    }
    & .slider {
      overflow-y: hidden;
      // animation: 150ms toggleMenu forwards;
      // transition-property: all;
      // transition-duration: .5s;
      // transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    & .closed {
      max-height: 0;
    }
  }
`;

export const DownloadAppSection = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`

export const DownloadAppSectionMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`

export const FooterSNS = styled.ul`
  list-style: none;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  & li {
    font-size: 16px;
    cursor: pointer;
    padding: 10px;
    z-index: 99;
    & i {
      font-size: 25px;
      position: relative;
      &:after {
        content: '';
        position: absolute;
      }
      &:hover:after {
        animation: 150ms myAnimation forwards;
        display: block;
        opacity: .1;
        border-radius: 50%;
        bottom: -50%;
        left: -50%;
        top: -8px;
        width: 42px;
        height: 42px;
      }
      @keyframes myAnimation {
        0% {
          background-color: transparent;
        }
        100% {
          background-color: #e7e7e7;
          transform: scale(1.2);
          transform-origin: center;
        }
      }
    }
  }
`;

export const DownloadApp = styled.span`
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 10px 15px;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    box-shadow: 0 0 0 2px #fff;
    transition: box-shadow .2s ease-in-out
  }
  &:hover:after {    
    box-shadow: 0 0 0 3px #fff;
  }
`;

// Inc
export const WholeIncWrapper = styled.div`
  background-color: #232347;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`;

export const IncWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 18px 24px;
  color: #fff;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IncCountryInfo = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  flex: 1;
  display: flex;
  font-size: 13px;
  padding: 0
  & li {
    margin-right: 11px;
    font-weight: 700;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const IncCountiryInfoCenter = styled.li`
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 0 10px;
  @media (max-width: 768px) {
   padding: 0 20px;
  }
`

export const IncAgreementInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  & li {
    text-decoration: underline;
    cursor: pointer;
  }
  & .info-first {
    text-decoration: none;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin-bottom: 12px;
      margin-right: 0;
    }
  }
  & .info-third {
    margin: 0 35px;
  }
  & div {
    display: none;
    @media (max-width: 768px) {
      display: block;
     }
  }
  ${IncUl}
`;