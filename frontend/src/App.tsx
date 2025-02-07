import React from 'react';
import { Provider } from 'react-redux';
import {store}  from '../src/store';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;