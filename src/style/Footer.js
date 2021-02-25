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
export const WholeSubscribeWrapper = styled.div`
  background-color: #D7E6F5;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  padding: 30px 0;
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
`;

export const FooterSection = styled.section`
  & h5 {
    font-size: 16px;
  }
  & p {
    font-size: 13px;
    cursor: pointer;
  }
`;

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
`;

export const IncCountryInfo = styled.ul`
  & li {
    margin-right: 11px;
    font-weight: 700;
  }
  ${IncUl}
`;

export const IncAgreementInfo = styled.ul`
  justify-content: flex-end;
  & li {
    margin-left: 25px;
    text-decoration: underline;
    cursor: pointer;
  }
  ${IncUl}
`