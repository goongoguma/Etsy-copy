import React from 'react';
import ItemLayout from '../ItemsList/ItemLayout';
import { comfortwear } from '../../../data/data';
import { ItemImageList } from '../../../style/Body';

export default function Comfortwear() {
  return (
    <ItemImageList>
      <ItemLayout data={comfortwear.slice(0, 3)} />
      <ItemLayout data={comfortwear.slice(3, 7)} />
    </ItemImageList>
  )
}

