import React from 'react';
import HeaderIndex from './components/header/HeaderIndex';
import BodyIndex from './components/body/BodyIndex';
import FilterIndex from './components/filter/FilterIndex';
import FooterIndex from './components/footer/FooterIndex';
import { Container } from './style/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HeaderBorder } from './style/Header'; 

function App() {
  return (
    <Router>
      <Container>
        <HeaderIndex />
        <HeaderBorder />
          <Switch>
            <Route path='/filter'>
              <FilterIndex />
            </Route>
            <Route exact path='/'>
              <BodyIndex />
            </Route>
          </Switch>
        <FooterIndex />
      </Container>
    </Router>
  );
}

export default App;
