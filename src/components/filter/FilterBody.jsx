import React from 'react';
import { 
  LikeBtn,
  FilterBodyFilter, 
  FilterBodyFilterBtn, 
  FilterBodyItemUl,
  FilterBodyItemList
} from '../../style/Filter';
import { filterList } from '../../data/data';
import { fullStar, fourAndAhalfStar } from '../../components/filter/FilterHead';
import { ItemPrice, DiscountPrice, DiscountRate, FreeShipping, Bestseller } from '../../style/Body';

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
      <div>
        <FilterBodyItemUl>
          {
            filterList.map(list => (
            <FilterBodyItemList key={list.title}>
              <LikeBtn style={{marginRight: '5px'}}>
                <i className="far fa-heart"></i>
              </LikeBtn>
                <img src={list.image} style={{width: '100%'}} />
                <p className='list-title'>{list.title}</p>
                <p className='list-company'>Company Name</p>
                <div className='list-review'>
                  <span className='stars'>{list.rate === 5 ? fullStar() : fourAndAhalfStar()}</span>
                  <span className='review-count'>{`(${list.review})`}</span>
                </div>
                <ItemPrice style={{ marginBottom: '50px', margin: 0}}>{`USD ${list.price}`}</ItemPrice>
                {list.freeShipping && <FreeShipping>FREE shipping</FreeShipping>}
                {list.bestseller && <Bestseller>Bestseller</Bestseller>}
                {list.discount > 0 && 
                <>
                  <DiscountPrice>{`USD ${list.price*(list.discount/100) + list.price}`}</DiscountPrice>
                  <DiscountRate>{`(${list.discount} off)`}</DiscountRate>
                </>}
              </FilterBodyItemList>
            ))
          }
        </FilterBodyItemUl>
      </div>
    </div>
  )
}

export default FilterBody
