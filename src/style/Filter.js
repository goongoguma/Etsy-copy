import styled, { css } from 'styled-components';

const btnAnimation = css`
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: absolute;
  top: -2px;
  left: -2px;
  z-index: -1;
  transition: transform 0.2s;
  border: 2px solid #181818;
`;

const btnHoverTransform = css`
  transform: scale(1.03);
  box-shadow: 0 4px 20px rgb(34 34 34 / 15%)
`

// FilterHead
export const FilterContainer = styled.div`
  padding: 12px 36px;
  margin-top: 5px;
`;

export const FilterInfoWrapper = styled.div`
  background-color: #FDEBD2;
  padding: 18px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
`;

export const FilterInfoIcon = styled.div`
  margin-right: 15px;
`;

export const FilterSVG = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  background: #fff; 
  padding: 5px;
  border-radius: 50%;
`;

export const FilterInfoText = styled.p`
  margin: 0;
  line-height: 28px;
`;

// FilterFirstItem
export const FilterFirstItemWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 18px;
  display: flex;
`;

export const FilterFirstItemImageWrapper = styled.div`
  position: relative;
  flex-basis: 45%;
  max-width: 45%;
  flex-grow: 1;
`;

export const FilterFirstItemImage = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 40%;
`;

export const LikeBtn = styled.span`
  position: absolute;
  color: #fff;
  right: 10px;
  top: 10px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  background: #fff;
  color: #181818;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;

export const FilterFirstItemDescWrapper = styled.div`
  padding: 0 12px 12px 12px;
`;

export const FilterFirstItemReviewWrapper = styled.div`
  display: flex;
  font-size: 12px;

  & .company-name {
    text-decoration: underline;
    float: left;
    margin-right: 5px;
  }

  & .review {
    float: left;
    margin-right: 5px;
  }
`;

export const ShopBtn = styled.span`
  padding: 13px 30px;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  display: inline;
  font-weight: 500;

  &:before {
    ${btnAnimation}
  }
  &:hover:before {
    ${btnHoverTransform}
  }
`;

// FilterBody

export const FilterBodyFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterBodyFilterBtn = styled.span`
  font-size: 15px;
  padding: 5px 10px;
  cursor: pointer;
  position: relative;

  &:before {
    ${btnAnimation}
    // top: -5px;
  }
  &:hover:before {
    ${btnHoverTransform}
  }
`;