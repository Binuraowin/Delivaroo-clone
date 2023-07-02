import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataDisplay from './components/DataDisplay';

const App = () => {
  return (
    <Provider store={store}>
      <DataDisplay />
    </Provider>
  );
};

export default App;
