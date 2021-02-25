import React from 'react';
import ItemLayout from '../ItemsList/ItemLayout';
import { personalizedGifts } from '../../../data/data';
import { ItemImageList } from '../../../style/Body';

export default function PersonalizedGifts() {
  return (
    <ItemImageList>
      <ItemLayout data={personalizedGifts.slice(0, 3)} />
      <ItemLayout data={personalizedGifts.slice(3, 7)} />
    </ItemImageList>
  )
}

