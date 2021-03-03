import React from 'react';
import { 
  FilterBodyFilter, 
  FilterBodyFilterBtn, 
} from '../../style/Filter';
import { filterList } from '../../data/data';

function FilterBody() {
  return (
    <div style={{marginTop: '6px', marginBottom: '12px'}}>
      <FilterBodyFilter>
        <FilterBodyFilterBtn>
          <i className="fas fa-list-ul" style={{marginRight: '5px'}} />
          All Filters
        </FilterBodyFilterBtn>
        <div style={{fontSize: '13px', fontWeight: '300', display: 'flex'}}>
          952,898 results, with Ads
          <i className="far fa-question-circle" style={{fontSize: '18px', marginLeft: '5px'}} />
        </div>
      </FilterBodyFilter>
    </div>
  )
}

export default FilterBody
