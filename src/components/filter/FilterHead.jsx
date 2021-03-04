import React from 'react';
import { filterList } from '../../data/data';
import { 
  FilterInfoWrapper, 
  FilterInfoIcon, 
  FilterSVG, 
  LikeBtn,
  ShopBtn,
  ShopBtnMobile,
  FilterInfoText,
  FilterFirstItemWrapper,
  FilterFirstItemImageWrapper,
  FilterFirstItemImage,
  FilterFirstItemDescWrapper,
  FilterFirstItemReviewWrapper,
} from '../../style/Filter';
import { ItemPrice, DiscountPrice, DiscountRate } from '../../style/Body'; 

export const fullStar = () => {
  return (
    <div>
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
    </div>
  )
};

export const fourAndAhalfStar = () => {
  return (
    <div>
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star" />
      <i className="fas fa-star-half-alt" />
    </div>
  )
};

function FilterHead() {
  return (
    <div style={{ marginBottom: '18px' }}>
      <FilterInfoWrapper>
        <FilterInfoIcon>
          <FilterSVG>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' focusable='false'>
              <path d='M9,21l2-0.5V10L9,9V8l4.667-0.479L14,7.688V20.5l2,0.5v1H9V21z M14,3.5C14,4.328,13.328,5,12.5,5S11,4.328,11,3.5 S11.672,2,12.5,2S14,2.672,14,3.5z' />
            </svg>
          </FilterSVG>
        </FilterInfoIcon>
        <div>
          <FilterInfoText>
            Items sold by Etsy sellers, such as masks, aren't medical-grade. 
            Etsy sellers cannot make medical or health claims. When selecting a mask, consult official guidance to make the right choice for you.
            <span style={{textDecoration: 'underline', marginLeft: '5px'}}>More info.</span>
          </FilterInfoText>
        </div>
      </FilterInfoWrapper>
      <FilterFirstItemWrapper>
          <FilterFirstItemImageWrapper>
            <LikeBtn>
              <i className="far fa-heart" />
            </LikeBtn>
            <FilterFirstItemImage style={{ background: `url(${filterList[0].image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} />
          </FilterFirstItemImageWrapper>
        <FilterFirstItemDescWrapper>
          <h3>{filterList[0].title}</h3>
          <FilterFirstItemReviewWrapper>
            <span className='company-name'>Company Name</span>
            <span className='review'>{fullStar()}</span>
            <span>{`(${filterList[0].review})`}</span>
          </FilterFirstItemReviewWrapper>
          <span className='company-name'>{filterList[0].title}</span>

          <ItemPrice style={{ marginBottom: '50px'}}>{`USD ${filterList[0].price}`}</ItemPrice>
          {filterList[0].discount > 0 && 
            <>
              <DiscountPrice>{`USD ${filterList[0].price*(filterList[0].discount/100) + filterList[0].price}`}</DiscountPrice>
              <DiscountRate>{`(${filterList[0].discount} off)`}</DiscountRate>
            </>}
          <ShopBtn>Shop this item</ShopBtn>
          <ShopBtnMobile>Shop this item<i class="fas fa-arrow-right" style={{marginLeft: '10px', cursor: 'pointer'}} /></ShopBtnMobile>
        </FilterFirstItemDescWrapper>
      </FilterFirstItemWrapper>
    </div>
  )
}

export default FilterHead
