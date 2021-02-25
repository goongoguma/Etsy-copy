import React from 'react';
import { 
  ItemImageLayout, 
  ItemPrice, 
  FreeShipping, 
  Bestseller,
  DiscountPrice,
  DiscountRate,
} from '../../../style/Body'

function ItemLayout({ data }) {
  return (
    <ItemImageLayout>
      <div style={{padding: '0 10px'}}>
        {
          <div>
            <img src={data[0].image} style={{width: '100%', height: '100%'}} />
            <ItemPrice>{`USD ${data[0].price}`}</ItemPrice>
            {data[0].freeShipping && <FreeShipping>FREE shipping</FreeShipping>}
            {data[0].bestseller && <Bestseller>Bestseller</Bestseller>}
            {data[0].discount > 0 && 
            <>
              <DiscountPrice>{`USD ${data[0].price*(data[0].discount/100) + data[0].price}`}</DiscountPrice>
              <DiscountRate>{`(${data[0].discount} off)`}</DiscountRate>
            </>}
          </div>
        }
      </div>
      <div style={{ padding: '0 20px' }}>
        <div style={{ marginBottom: '30px' }}>
          <img src={data[1].image} style={{width: '100%', height: '100%'}} />
          <ItemPrice>{`USD ${data[1].price}`}</ItemPrice>
          {data[1].freeShipping && <FreeShipping>FREE shipping</FreeShipping>}
          {data[1].bestseller && <Bestseller>Bestseller</Bestseller>}
          {data[1].discount > 0 && 
          <>
            <DiscountPrice>{`USD ${data[1].price*(data[1].discount/100) + data[1].price}`}</DiscountPrice>
            <DiscountRate>{`(${data[1].discount} off)`}</DiscountRate>
          </>}
        </div>
        <div>
          <img src={data[2].image} style={{width: '100%', height: '100%'}} />
          <ItemPrice>{`USD ${data[2].price}`}</ItemPrice>
          {data[2].freeShipping && <FreeShipping>FREE shipping</FreeShipping>}
          {data[2].bestseller && <Bestseller>Bestseller</Bestseller>}
          {data[2].discount > 0 && 
          <>
            <DiscountPrice>{`USD ${data[2].price*(data[2].discount/100) + data[2].price}`}</DiscountPrice>
            <DiscountRate>{`(${data[2].discount} off)`}</DiscountRate>
          </>}
        </div>
      </div>
    </ItemImageLayout>
   )
}

export default ItemLayout
