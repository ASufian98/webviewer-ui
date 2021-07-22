import React from 'react';
import PageManipulationOverlay from './PageManipulationOverlay'
import FlyoutMenu from '../FlyoutMenu/FlyoutMenu';

import { createStore } from 'redux';

import { Provider } from "react-redux";


export default {
  title: 'Components/PageManipulationOverlay',
  component: PageManipulationOverlay,
};

const initialState = {
  viewer: {
    disabledElements: {},
    customElementOverrides: {},
  }
};
function rootReducer(state = initialState, action) {
  return state;
}

const store = createStore(rootReducer);

export function Basic() {

  return (
    <Provider store={store}>
      <div className='Overlay FlyoutMenu'>
        <PageManipulationOverlay />
      </div>
    </Provider>
  );
}


