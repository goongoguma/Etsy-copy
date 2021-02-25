import React from 'react';
import ItemLayout from '../ItemsList/ItemLayout';
import { homeImprovement } from '../../../data/data';
import { ItemImageList } from '../../../style/Body';

export default function HomeImprovement() {
  return (
    <ItemImageList>
      <ItemLayout data={homeImprovement.slice(0, 3)} />
      <ItemLayout data={homeImprovement.slice(3, 7)} />
    </ItemImageList>
  )
}

