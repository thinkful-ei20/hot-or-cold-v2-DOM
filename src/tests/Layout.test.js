import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import {Provider} from 'react-redux';
import store from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
                    <Layout />
                  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
