import React from 'react';
import ItemLayout from '../ItemsList/ItemLayout';
import { cozyUp } from '../../../data/data';
import { ItemImageList } from '../../../style/Body';

export default function CozyUp() {
  return (
    <ItemImageList>
      <ItemLayout data={cozyUp.slice(0, 3)} />
      <ItemLayout data={cozyUp.slice(3, 7)} />
    </ItemImageList>
  )
}

