import React, { useState } from 'react';
import ReactDom from 'react-dom';
import {
  FilterOverlay,
  FilterModalStyleOpen,
  FilterModalBodyWrapper,
  FilterModalTitleWrapper
} from '../../style/Filter';

function FilterModal({ open, isClose}) {
  const [ radioVal, setRadioVal ] = useState('')
  if (!open) return null;

  console.log(radioVal)

  return ReactDom.createPortal(
    <>
      <FilterOverlay onClick={isClose} />
      <FilterModalStyleOpen>
        <i className='fas fa-times' onClick={isClose} />
        <FilterModalBodyWrapper>
          <FilterModalTitleWrapper>Filters</FilterModalTitleWrapper>
          <section className='category'>
            <p className='filter-by-category'>Filter by category</p>
            <div className='category-input'>
              <div className='all-categories'>All categories</div>
              <i className='fas fa-chevron-right'></i>
            </div>
          </section>
          <section className='offers'>
            <p>Special offers</p>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='free' />
              <label htmlFor='free' className='checkbox-label'><span>FREE shipping</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='sale' />
              <label htmlFor='sale' className='checkbox-label'><span>On sale</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='personalize' />
              <label htmlFor='personalize' className='checkbox-label'><span>Personalizable (Monogram, engravings, etc)</span></label>
            </div>
          </section>
          <section className='ship'>
            <p>Ready to ship in</p>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='1business' />
              <label htmlFor='1business' className='checkbox-label'><span>1 business day</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='3business' />
              <label htmlFor='3business' className='checkbox-label'><span>1-3 business days</span></label>
            </div>
          </section>
          <section className='price'>
            <p>Price ($)</p>
            <div className='wrapper'>
              <input  
                type='radio' 
                id='any' 
                value='any' 
                checked={radioVal === 'any'} 
                onChange={e => setRadioVal(e.target.value)} 
              />
              <label htmlFor='any' className='radio-label'><span>Any Price</span></label>
            </div>
            <div className='wrapper'>
              <input  
                type='radio' 
                id='under' 
                value='under' 
                checked={radioVal === 'under'}  
                onChange={e => setRadioVal(e.target.value)} 
              />
              <label htmlFor='under' className='radio-label'><span>Under USD 25</span></label>
            </div>
            <div className='wrapper'>
              <input  
                type='radio' 
                id='25to50' 
                value='25to50' 
                checked={radioVal === '25to50'}  
                onChange={e => setRadioVal(e.target.value)} 
              />
              <label htmlFor='25to50' className='radio-label'><span>USD 25 to USD 50</span></label>
            </div>
            <div className='wrapper'>
              <input  
                type='radio' 
                id='50to100' 
                value='50to100' 
                checked={radioVal === '50to100'} 
                onChange={e => setRadioVal(e.target.value)} 
              />
              <label htmlFor='50to100' className='radio-label'><span>USD 50 to USD 100</span></label>
            </div>
            <div className='wrapper'>
              <input  
                type='radio' 
                id='over' 
                value='over' 
                checked={radioVal === 'over'} 
                onChange={e => setRadioVal(e.target.value)} 
              /> 
              <label htmlFor='over' className='radio-label'><span>Over USD 100</span></label>
            </div>
            <div className='wrapper'>
              <input  
                type='radio' 
                id='custom' 
                value='custom' 
                checked={radioVal === 'custom'}  
                onChange={e => setRadioVal(e.target.value)} 
              />
              <label htmlFor='custom' className='radio-label'><span>Custom</span></label>
              <div style={{marginLeft: '30px'}}>
                <input type='text' placeholder='Low' className='price-input' /> ~ <input type='text' placeholder='High' className='price-input'/>
              </div>
            </div>
          </section>
          <section className='closure'>
            <p>Closure</p>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='elastic' />
              <label htmlFor='elastic' className='checkbox-label'><span>Elastic</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='Tie' />
              <label htmlFor='Tie' className='checkbox-label'><span>Tie</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='Wrap-around' />
              <label htmlFor='Wrap-around' className='checkbox-label'><span>Wrap-around</span></label>
            </div>
          </section>
          <section className='size'>
            <p>Size</p>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='adult' />
              <label htmlFor='adult' className='checkbox-label'><span>Adult</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='child' />
              <label htmlFor='child' className='checkbox-label'><span>Child</span></label>
            </div>
          </section>
          <div className='color'>
            <p>Color</p>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='black' />
              <label htmlFor='black' className='checkbox-label'><span>Black</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='blue' />
              <label htmlFor='blue' className='checkbox-label'><span>Blue</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='white' />
              <label htmlFor='white' className='checkbox-label'><span>White</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='green' />
              <label htmlFor='green' className='checkbox-label'><span>Green</span></label>
            </div>
            <div className='wrapper'>
              <input className='checkbox' type='checkbox' id='red' />
              <label htmlFor='red' className='checkbox-label'><span>Red</span></label>
            </div>
          </div>
        </FilterModalBodyWrapper>
        <div></div>
        <div className="button-wrapper">
          <button style={{border: '2px solid black', background: '#fff'}} onClick={isClose}>Cancel</button>
          <button style={{border: '2xp solid black', background: 'black', color: '#fff'}}>Apply</button>
        </div>
      </FilterModalStyleOpen>
    </>,
    document.getElementById('toggleFilter')
  )
};

export default FilterModal
