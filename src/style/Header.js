import styled from 'styled-components';

// HeaderIndex 
export const Container = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: 10px 12px;
  }
`;

// Head
export const Logo = styled.span`
  width: 80px;
  height: 40px;
  display: block;
  fill: #f1641e;
  line-height: 5;
  padding-right: 15px;
  @media (max-width: 768px) {
    width: 60px;
    height: 30px;
    line-height: 0;
  }
`;

export const HeadWapper = styled.div`
  padding: 12px 36px;
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  height: 48px;
  display: flex;
  flex-grow: 1;
  @media (max-width: 768px) {
    justify-content: flex-end;
    
  }
`;

export const HeaderInput = styled.input`
  border: none;
  background-color: #EEEEEF;
  border-top-left-radius: 96px;
  border-bottom-left-radius: 96px;
  height: 100%;
  width: 100%;
  font-size: 20px;
  box-shadow: 1px 2px 4px 0 rgb(34 34 34 / 10%) inset;
  padding: 0 20px;
  border-top: 1px solid rgba(34, 34, 34, 0.15);
  border-bottom: 1px solid rgba(34, 34, 34, 0.15);
  border-left: 1px solid rgba(34, 34, 34, 0.15);
  &:focus {
    outline: none;
    background-color: #fff;
  }
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const SearchButton = styled.button`
  width: 48px;
  height: 50px;
  border: none;
  box-shadow: 0px 2px 4px 0 rgb(34 34 34 / 10%) inset;
  border-top-right-radius: 96px;
  border-bottom-right-radius: 96px;
  border-top: 1px solid rgba(34, 34, 34, 0.15);
  border-bottom: 1px solid rgba(34, 34, 34, 0.15);
  border-right: 1px solid rgba(34, 34, 34, 0.15);
  &:focus {
    outline: none;
    cursor: pointer;
  }
`;

export const SignInButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 13px;
  margin: 0 15px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

// Menu
export const MenuWrapper = styled.ul`
  background: #f6495ed;
  margin: 0;
  padding: 12px 36px;
  display: flex;
  justify-content: space-between;
  & li {
    list-style: none;
    cursor: pointer;
    font-weight: 300;
    font-size: 13px;
  }
`;

// HeadMobile
export const HeadeMobileWrppaer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// MenuMobile
export const MenuMobileWrapper = styled.div`
  padding: 20px 0;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    padding: 10px 0 0 0;
  }
`;

export const NavIcon = styled.span`
  background: #333;
  display: block;
  height: 2px;
  width: 15px;
  position: relative;
  transition: background .2s ease-out;
  cursor: pointer;
  &:before {
    content: '';
    background: #333;
    display: block;
    width: 18px;
    height: 100%;
    position: absolute;
    transition: all .2s ease-in-out;
    top: 6px;
  }

  &:after {
    content: '';
    background: #333;
    display: block;
    width: 18px;
    height: 100%;
    position: absolute;
    transition: all .2s ease-in-out;
    top: -6px;
  }
`;

// ToggleMenu
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
`;

export const ModalStyle = styled.div`
  position: fixed;
  top: 64%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 1000;
  width: 100%;
  padding: 10px;
`;

export const ModalTitleWrapper = styled.div`
  & h3 {
    position: relative;
    padding: 0 15px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    & i {
      position: absolute;
      right: 0;
    }
  }
`;

export const ModalCloseBtn = styled.span`
  background: transparent;
  position: absolute;
  right: 0;
  width: 25px;
  height: 25px;
  top: 10px;
  padding: 0 10px;
  cursor: pointer;
  &:before {
    position: absolute;
    background-color: #333;
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    transform: rotate(-45deg);
  }
  &:after {
    position: absolute;
    background-color: #333;
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    transform: rotate(45deg);
  }
`;

export const ModalBodyWrapper = styled.ul`
  padding: 0;
  & li {
    font-weight: 500;
    list-style: none;
    padding: 12px;
    display: flex;
    justify-content: space-between;
  }
`;





