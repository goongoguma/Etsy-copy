import React, { useState } from 'react';
import { 
  ItemWrapper, 
  ItemText, 
  ItemTextList,
  ItemTextListSelected,
  VisitShop
} from '../../style/Body';
import HomeImprovement from './ItemsList/HomeImprovement';
import PersonalizedGifts from './ItemsList/PersonalizedGifts';
import Comfortwear from './ItemsList/Comfortwear';
import CozyUp from './ItemsList/CozyUp';
import Storage from './ItemsList/Storage';
import WorkFromHome from './ItemsList/WorkFromHome';

function Items() {
  const [tab, setTab] = useState(0);
  const textOrder = [
    'Home improvement ideas', 
    'Personalized gifts', 
    'Comfortwear', 
    'Cozy up', 
    'Storage & Organization', 
    'Work from home'];

  const handleTabClick = (index) => {
    setTab(index)
  };

  const handleItemListComponent = () => {
    if (tab === 0) {
      return <HomeImprovement />
    } else if (tab === 1) {
      return <PersonalizedGifts />
    } else if (tab === 2) {
      return <Comfortwear />
    } else if (tab === 3) {
      return <CozyUp />
    } else if (tab === 4) {
      return <Storage />
    } else {
      return <WorkFromHome />
    }
  };

  return (
    <ItemWrapper>
      <h3>Discover unique hand-picked items</h3>
      <ItemText>
        {textOrder.map((order, index) => {
          if (index === tab) {
            return (
              <ItemTextListSelected key={index}>{order}</ItemTextListSelected>
            )
          }
          return <ItemTextList key={index} onClick={() => handleTabClick(index)}>{order}</ItemTextList>
      })}
      </ItemText>
      {handleItemListComponent()}
      <VisitShop>
        Visit shop <i className="fas fa-chevron-right"></i>
      </VisitShop>
    </ItemWrapper>
  )
};

export default Items;
