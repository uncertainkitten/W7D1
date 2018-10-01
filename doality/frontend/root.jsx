import React from 'react';
import {Provider} from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <h1>For once, React is actually working!</h1>
  </Provider>
);

export default Root;
