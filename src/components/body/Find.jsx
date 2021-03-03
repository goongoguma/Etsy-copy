import React from 'react';
import { 
  FindWrapper, 
  FindTitle, 
  FindDesc, 
  FindListWrapper,
  FindListLi,
  FindImage,
  ImageText,
} from '../../style/Body';
import { Link } from 'react-router-dom';

function Find() {
  const textOrder = ['Face masks', 'Wall decor', 'Gift Ideas', 'Outdoor & garden', 'Self-care', 'Craft kits'];
  const backgroundOrder = [
    'https://i.etsystatic.com/22899963/r/il/c8d8d7/2697206720/il_300x300.2697206720_3zvc.jpg',
    'https://i.etsystatic.com/6507355/r/il/3abe81/2502439474/il_300x300.2502439474_brve.jpg',
    'https://i.etsystatic.com/8331303/r/il/dec4ed/2753449716/il_300x300.2753449716_i5j3.jpg',
    'https://i.etsystatic.com/12418300/r/il/da5710/2446305498/il_300x300.2446305498_opq0.jpg',
    'https://i.etsystatic.com/17985171/r/il/a1b142/2257804059/il_300x300.2257804059_5vgm.jpg',
    'https://i.etsystatic.com/10172021/r/il/e75e3d/1348381458/il_300x300.1348381458_8ro0.jpg'
  ]
  return (
    <FindWrapper>
      <FindTitle>Find things you'll love. Support independent sellers. Only on Etsy.</FindTitle>
      <FindDesc>Everyday finds</FindDesc>
      <FindListWrapper>
        {
          textOrder.map((menu, index) => (
            <Link to='filter' key={menu} style={{ textDecoration: 'none', color: '#181818' }}>
              <FindListLi key={index}>
                <FindImage style={{background: `url(${backgroundOrder[index]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} />
                <ImageText>{menu}<i className="fas fa-arrow-right" /></ImageText>
              </FindListLi>
            </Link>
          ))
        }
      </FindListWrapper>
    </FindWrapper>
  )
}

export default Find
