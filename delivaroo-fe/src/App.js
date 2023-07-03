import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataDisplay from './components/DataDisplay';
import RestaurantDetails from './components/RestaurantDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'; // Import your CSS file with hover styles

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <Header />
          <div className="content-container">
            <Switch>
              <Route exact path="/" component={DataDisplay} />
              <Route exact path="/restaurant/:id" component={RestaurantDetails} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
