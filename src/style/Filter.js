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
`;

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
  @media (max-width: 425px) {
    padding: 12px 0px;
  }
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

// FilterModal
export const FilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
`;

export const FilterModalStyleOpen = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(2px, -50%);
  background-color: #fff;
  z-index: 1000;
  padding: 30px 0 30px 30px;
  width: 420px;
  height: 100%;
  min-width: 375px;
  max-width: 480px;
  animation: 300ms filterToggleOn forwards;
  @keyframes filterToggleOn {
    0% {
      left: -50%;
      color: transparent;
      width: 0;
    }
    100% {
      left: 0;
    }
  }

  .fa-times {
    position: fixed;
    right: -35px;
    top: 55px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
@media (max-width: 768px) {
  padding: 0;
  width: 100%;
}
& .button-wrapper {
  position: fixed;
  top: 90%;
  padding: 10px;
  border-top: 1px solid #DEDEDE;
  width: 95.5%;
  left: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  & button {
    width: 45%;
    border-radius: 30px;
    border: none;
    padding: 12px 18px;
    font-size: 16px;
    font-weight: 700;
  }
}
`;

export const FilterModalTitleWrapper = styled.h3`
  font-size: 32px;
  line-height: 36px;
  font-weight: 300;
`;

export const FilterModalBodyWrapper = styled.div`
  padding: 0 0 0 24px;
  overflow-y: scroll;
  height: 900px;
  & p {
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0.1px;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 18px;
      font-weight: 700;
      line-height: 21.6px;
    }
  }
  & span {
    font-size: 13px;
  }
  & .wrapper {
    position: relative;
    margin: 5px 0;
  }
  & input[type='checkbox'] {
    width: 15px;
    height: 15px;
    min-width: 15px;
    border-radius: 3px;
    vertical-align: middle;
    opacity: 0;
    margin-right: 10px;
  } 
  & input[type='checkbox']:checked ~ .checkbox-label:before {
    background: #222222;
  }
  & input[type='checkbox']:checked ~ .checkbox-label:after {
    opacity: 1;
    transform: scale(1);
  }
  @media (max-width: 768px) {
    height: 785px;
    padding: 0 30px;
  }
  .checkbox-label {
    &:before {
      content: '';
      height: 15px;
      width: 15px;
      min-width: 15px;
      border-radius: 3px;
      border: 2px solid rgba(34, 34, 34, .3);
      transition: all 200ms ease-out;
      position: absolute;
      left: 0;
      @media (max-width: 768px) {
        height: 18px;
        width: 18px;
        min-width: 18px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      height: 12px;
      width: 12px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 24 24%22%3E%3Cpath fill%3D%22%23FFFFFF%22 d%3D%22M9.17,21.71L0.86,13.4a2,2,0,1,1,2.76-2.76L9,16,20.28,2.93a2,2,0,1,1,2.95,2.56Z%22 %2F%3E%3C%2Fsvg%3E");
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 200ms ease-out;
      @media (max-width: 768px) {
        top: 3px;
        left: 3px;
        height: 18px;
        width: 18px;
        min-width: 18px;
      }
    }
  }
  & input[type='radio'] {
    height: 18px;
    width: 18px;
    min-width: 18px;
    vertical-align: middle;
    opacity: 0;
    border-radius: 100px;
    margin-right: 5px;
  }
  & input[type='radio']:checked ~ .radio-label:before {
    background: #222222;
  }
  & input[type='radio']:checked ~ .radio-label:after {
    opacity: 1;
    transform: scale(1);
  }

  .radio-label {
    &:before {
      content: '';
      width: 15px;
      height: 15px;
      min-width: 15px;
      border-radius: 100px;
      border: 2px solid rgba(32, 32, 32, .3);
      margin-right: 6px;
      transition: all 200ms ease-out;
      position: absolute;
      left: 0px;
    }
    &:after {
      content: '';
      position: absolute;
      border-radius: 100px;
      left: 5.4px;
      top: 6px;
      width: 8px;
      height: 8px;
      background: #fff;
      transition: all 200ms ease-out;
    }
  }
  .price-input {
    font-size: 13px;
    height: 36px;
    line-height: 18px;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgb(34 34 34 / 10%) inset;
    border: 1px solid rgba(34, 34, 34, 0.15);
    border-radius: 6px;
    color: #222222;
    padding-left: 12px;
    width: 86px;
    margin-top: 5px;
  }

}
  & .category {
    margin-bottom: 20px;
    & .filter-by-category {
      margin-bottom: 10px;
    }
    & .category-input {
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.15);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        & .fa-chevron-right {
          color: #757575;
        }
        &:hover {
          background-color: whitesmoke; 
        }
        & .all-categories {
          font-weight: 500;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
    & .offers {
      margin-bottom: 20px;
      & p {
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.1px;
      }
    }
    & .ship {
      margin-bottom: 20px;
    }
    & .price {
      margin-bottom: 20px;

    & .closure {
      margin-bottom: 20px;
    }
    & .size {
      margin-bottom: 20px;
    }
  }
`;
