import React from 'react';
import ReactDom from 'react-dom';
import { 
  Overlay, 
  ModalStyleOpen,
  ModalTitleWrapper,
  ModalCloseBtn,
  ModalBodyWrapper 
} from '../../style/Header';
const menu = [
  'Jewelry & Accessories', 
  'Clothing & Shoes', 
  'Home & Living', 
  'Wedding & Party', 
  'Toys & Entertainment', 
  'Art & Collectibles', 
  'Craft Supplies & Tools'
];

function ToggleMenu({ open, onClose }) {
  if(!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalStyleOpen>
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
      </ModalStyleOpen>
    </>, 
    document.getElementById('toggleMenu')
  )
};

export default ToggleMenu
