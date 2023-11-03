// 

import React from 'react';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './Reducers';
import initialState from './Store';

const favProvider = ({children}) => {
  const store = createStore(reducers, initialState);
  return <Provider store={store}>{children}</Provider>;
};

export default favProvider;