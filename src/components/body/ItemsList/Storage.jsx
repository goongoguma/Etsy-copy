import React from 'react';
import ItemLayout from '../ItemsList/ItemLayout';
import { storage } from '../../../data/data';
import { ItemImageList } from '../../../style/Body';

export default function Storage() {
  return (
    <ItemImageList>
      <ItemLayout data={storage.slice(0, 3)} />
      <ItemLayout data={storage.slice(3, 7)} />
    </ItemImageList>
  )
}

