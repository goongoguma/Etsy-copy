import React from 'react';
import { selections } from '../../data/data';
import { 
  SelectionsWrapper, 
  SelectionsTitle, 
  SelectionsItemWrapper,
  SelectionsItem,
  SelectionItemImage 
} from '../../style/Body';

function Selections() {
  return (
    <SelectionsWrapper>
      <SelectionsTitle>
        <h2>Shop our selections</h2>
        <p>Items hand-picked by our editos</p>
      </SelectionsTitle>
      <SelectionsItemWrapper>
        {
          selections.map(selection => (
            <SelectionsItem key={selection.title}>
              <SelectionItemImage style={{
                background: `url(${selection.image})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'contain',
              }} 
              />
              <p>{selection.title}</p>
            </SelectionsItem>
          ))
        }
      </SelectionsItemWrapper>
    </SelectionsWrapper>
  )
}

export default Selections
