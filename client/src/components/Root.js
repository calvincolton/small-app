import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../features';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxThunk)
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

// NOTE: this Root file was created so that we can wrap children components when testing,
// effectively passing the store to each individual component

// NOTE: this file, Root.js, provides data layer control (i.e. redux).
// App.js provides rendering layer control (i.e. react-router)