import React, { useState, useEffect } from 'react';
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

  const onClose = () => {
    setOpen(false)
  };

  useEffect(() => {
    if (open) {
      document.body.style.cssText = `overflow: hidden;`
    } else {
      document.body.style.cssText = `overflow: visible;`
    }
  }, [open]);

  const navToggle = () => {
    setOpen(!open);
  }

  return (
    <>
      <ToggleMenu open={open} onClose={onClose} />
      <MenuMobileWrapper>
        <NavIcon onClick={navToggle} />
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
