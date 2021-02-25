import styled from 'styled-components';

// HeaderIndex 
export const Container = styled.div`
`;

// Head
export const Logo = styled.span`
  width: 80px;
  height: 40px;
  display: block;
  fill: #f1641e;
  line-height: 5;
  padding-right: 15px;
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




