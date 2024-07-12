import { createReducer as createReducerOrig, ActionReducerMapBuilder } from '@reduxjs/toolkit';

export const createReducer = (payload: any) => {
  const { initialState, actionType } = payload;
  return createReducerOrig(initialState, (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(actionType, (state, action) => action.payload);
  });
};
