import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Search } from './pages/Search';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/buscar?p=Madrid' />
        </Route>
        <Route path='/buscar'>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
