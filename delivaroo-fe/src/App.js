import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataDisplay from './components/DataDisplay';
import RestaurantDetails from './components/RestaurantDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={DataDisplay} />
          <Route exact path="/restaurant/:id" component={RestaurantDetails} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
