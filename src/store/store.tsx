// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const initialState = {};

// const middleware: any = [thunk];

// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(middleware)));

// export default store;

import rootReducer from '@/reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
