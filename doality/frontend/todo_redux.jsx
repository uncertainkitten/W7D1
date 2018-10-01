import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Store from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
  const store = Store();
  window.store = store;
});
