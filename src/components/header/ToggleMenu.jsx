import React from 'react';
import ReactDom from 'react-dom';
import { 
  Overlay, 
  ModalStyle,
  ModalTitleWrapper,
  ModalCloseBtn,
  ModalBodyWrapper 
} from '../../style/Header';

function ToggleMenu({ open, onClose }) {
  if(!open) return null;

  const menu = ['Jewelry & Accessories', 'Clothing & Shoes', 'Home & Living', 'Wedding & Party', 'Toys & Entertainment', 'Art & Collectibles', 'Craft Supplies & Tools'];

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalStyle>
        <ModalTitleWrapper>
          <h3>Browse Categories <ModalCloseBtn onClick={onClose} /></h3>
        </ModalTitleWrapper>
        <ModalBodyWrapper>
          {
            menu.map(item => (
              <li key={item}>{item} <i className="fas fa-chevron-right"></i></li>
            ))
          }
        </ModalBodyWrapper>
      </ModalStyle>
    </>,
    document.getElementById('toggleMenu')
  )
};

export default ToggleMenu
