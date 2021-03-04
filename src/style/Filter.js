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
  @media (max-width: 425px) {
    padding: 12px;
  }
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

  @media (max-width: 425px) {
    display: none;
  }
`;

export const FilterInfoText = styled.p`
  margin: 0;
  line-height: 28px;

  @media (max-width: 425px) {
    font-size: 13px;
    line-height: 18px;
    font-weight: 300;
  }
`;

// FilterFirstItem
export const FilterFirstItemWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 18px;
  display: flex;
  @media (max-width: 425px) {
    box-shadow: 0 4px 20px rgb(34 34 34 / 15%);
    padding: 10px;
    border-radius: 10px;
  }
`;

export const FilterFirstItemImageWrapper = styled.div`
  position: relative;
  flex-basis: 45%;
  max-width: 45%;
  flex-grow: 1;
  @media (max-width: 425px) {
    width: 30%;
  }
`;

export const FilterFirstItemImage = styled.div`
  padding: 40%;
`;

export const LikeBtn = styled.span`
  position: absolute;
  color: #181818;
  right: 10px;
  top: 10px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  text-align: center;
  cursor: pointer;
  z-index: 9;
  line-height: 36px;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 50%;
    transition: transform .2s;
  }
  &:hover:before {
    transform: scale(1.05);
    background: #F5F5F5;
  }
`;

export const FilterFirstItemDescWrapper = styled.div`
  padding: 0 12px 12px 12px;
  @media (max-width: 425px) {
    width: 70%;
  }

  & h3 {
    margin: 0;
    @media (max-width: 425px) {
      margin: 0;
      font-size: 13px;
      line-height: 18px;
      font-weight: 500;
    }
  }
`;

export const FilterFirstItemReviewWrapper = styled.div`
  display: flex;
  font-size: 12px;
  margin: 10px 0;
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

  @media (max-width: 425px) {
    display: none;
  }
`;

export const ShopBtnMobile = styled.p`
  display: none;
  margin: 0;
  @media (max-width: 425px) {
    display: block;
    font-weight: 500;
    cursor: pointer;
  }
`

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
  display: block;
  &:before {
    ${btnAnimation}
  }
  &:hover:before {
    ${btnHoverTransform}
  }
`;

export const FilterBodyItemUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const FilterBodyItemList = styled.li`
  position: relative;
  margin-top: 20px;
  padding: 6px;
  list-style: none;
  flex-basis: calc(25% - 12px);
  max-width: calc(25% - 12px);
  cursor: pointer;
  &:hover {
    & img {
      box-shadow: .5px -.5px 3px 2px #949494;
      transition: box-shadow .3s;
    }
  }
  & .list-title {
    margin: 0;
    font-size: 14px;
    font-weight: 300;
  }
  & .list-company {
    margin: 5px 0;
    font-size: 12px;
    font-weight: 300;
    color: #595959;
  }
  & .list-review {
    display: flex;
    margin: 5px 0;
  }
  & .stars {
    font-size: 12px;
  }
  & .review-count {
    font-size: 12px;
    color: #595959;
  }

  @media (max-width: 768px) {
    flex-basis: calc(33.33% - 12px);
    max-width: calc(33.33% - 12px);
  }

  @media (max-width: 425px) {
    flex-basis: calc(50% - 12px);
    max-width: calc(50% - 12px);
  }
`;