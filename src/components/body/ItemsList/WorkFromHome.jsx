import React from 'react';
import ItemLayout from '../ItemsList/ItemLayout';
import { workFromHome } from '../../../data/data';
import { ItemImageList } from '../../../style/Body';

export default function WorkFromHome() {
  return (
    <ItemImageList>
      <ItemLayout data={workFromHome.slice(0, 3)} />
      <ItemLayout data={workFromHome.slice(3, 7)} />
    </ItemImageList>
  )
}

