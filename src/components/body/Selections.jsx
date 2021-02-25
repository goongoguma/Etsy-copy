import React from 'react';
import { selections } from '../../data/data';
import { 
  SelectionsWrapper, 
  SelectionsTitle, 
  SelectionsItemWrapper,
  SelectionsItem 
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
              <div style={{
                background: `url(${selection.image})`, 
                height: '162px', width: '204px', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: 'contain',
                borderTopRightRadius: '12px',
                borderTopLeftRadius: '12px'}} 
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
