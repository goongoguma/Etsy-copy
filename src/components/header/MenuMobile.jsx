import React, { useState } from 'react';
import ToggleMenu from '../../components/header/ToggleMenu';
import { 
  MenuMobileWrapper, 
  NavIcon,
  InputWrapper,
  HeaderInput,
  SearchButton,
} from '../../style/Header';

function MenuMobile() {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true)
  };

  const onClose = () => {
    setOpen(false)
  };

  return (
    <>
      <ToggleMenu open={open} onClose={onClose} />
      <MenuMobileWrapper>
        <NavIcon onClick={() => setOpen(!open)} />
        <InputWrapper>
          <HeaderInput type='text' placeholder='Search for anything' />
          <SearchButton>
            <i className="fas fa-search" />
          </SearchButton>
        </InputWrapper>
      </MenuMobileWrapper>
    </>
  )
}

export default MenuMobile
