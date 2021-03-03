import React from 'react';
import FilterHead from './FilterHead';
import FilterBody from './FilterBody';
import { filterList } from '../../data/data';
import { FilterContainer } from '../../style/Filter';


function FilterIndex() {
  return (
    <FilterContainer>
      <FilterHead />
      <FilterBody />
    </FilterContainer>
  )
}

export default FilterIndex
