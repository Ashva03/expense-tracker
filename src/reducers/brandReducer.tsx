import { combineReducers } from 'redux';
import * as Actions from '../actions/types';
import { createReducer } from '@/helper/reduxHelpers';
import { createReducer as createReducerOrig, current, PayloadAction } from '@reduxjs/toolkit';
import { AdsItemInterface, BrandDataInterface } from '@/app/Interface/brandInterface';

const IndustryReducer = createReducer({
  initialState: '',
  actionType: Actions.SET_INDUSTRY_FIELD,
});

const sortTypeReducer = createReducer({
  initialState: '',
  actionType: Actions.SET_SORTING_TYPE,
});

const initialSavedBrandList: BrandDataInterface[] = [];

const setSavedBrandListReducer = createReducerOrig(initialSavedBrandList, (builder) => {
  builder
    .addCase(Actions.SET_SAVED_BRAND_LIST, (state = initialFilteredList, action: PayloadAction<any, never>) => {
      return [...(action.payload || [])];
    })
    .addCase(
      Actions.UPDATE_SAVED_BRAND_LIST,
      (state, action: PayloadAction<{ id: string; propsName: string; value: any }, never>) => {
        return state.map((brand) => {
          if (brand?.sys?.id === action.payload.id) {
            return {
              ...brand,
              [action.payload.propsName]: action.payload.value,
            };
          }
          return brand;
        });
      },
    )
    .addCase(Actions.CLEAR_SAVED_BRAND_LIST, () => {
      const input = JSON.parse(JSON.stringify(initialSavedBrandList));
      return input;
    });
});

const initialFilteredList: BrandDataInterface[] = [];

const setFilteredListReducer = createReducerOrig(initialFilteredList, (builder) => {
  builder
    .addCase(Actions.SET_FILTERED_LIST, (state = initialFilteredList, action: PayloadAction<any, never>) => {
      return [...(action.payload || [])];
    })
    .addCase(Actions.UPDATE_FILTERED_LIST, (state, action: PayloadAction<any, never>) => {
      const input = JSON.parse(JSON.stringify(current(state)));
      input[action.payload.propsName] = action.payload.value;
      return input;
    })
    .addCase(Actions.CLEAR_FILTERED_LIST, () => {
      const input = JSON.parse(JSON.stringify(initialFilteredList));
      return input;
    });
});

const initialBrandList: BrandDataInterface[] = [];

const setBrandListReducer = createReducerOrig(initialBrandList, (builder) => {
  builder
    .addCase(Actions.SET_BRAND_LIST, (state = initialBrandList, action: PayloadAction<any, never>) => {
      return [...(action.payload || [])];
    })
    .addCase(Actions.UPDATE_BRAND_LIST, (state, action: PayloadAction<any, never>) => {
      const input = JSON.parse(JSON.stringify(current(state)));
      input[action.payload.propsName] = action.payload.value;
      return input;
    })
    .addCase(Actions.CLEAR_BRAND_LIST, () => {
      const input = JSON.parse(JSON.stringify(initialBrandList));
      return input;
    });
});

const initialFilteredBrandCardData: AdsItemInterface[] = [];

const setFilteredBrandCardReducer = createReducerOrig(initialFilteredBrandCardData, (builder) => {
  builder
    .addCase(Actions.SET_FILTERED_BRAND_CARD, (state = initialFilteredBrandCardData, action: PayloadAction<any, never>) => {
      return [...(action.payload || [])];
    })
    .addCase(Actions.UPDATE_FILTERED_BRAND_CARD, (state, action: PayloadAction<any, never>) => {
      const input = JSON.parse(JSON.stringify(current(state)));
      input[action.payload.propsName] = action.payload.value;
      return input;
    })
    .addCase(Actions.CLEAR_FILTERED_BRAND_CARD, () => {
      const input = JSON.parse(JSON.stringify(initialFilteredBrandCardData));
      return input;
    });
});


const brandReducer = combineReducers({
  industry: IndustryReducer,
  sortType: sortTypeReducer,
  savedBrandList: setSavedBrandListReducer,
  filteredList: setFilteredListReducer,
  brandList: setBrandListReducer,
  filteredBrandCard: setFilteredBrandCardReducer
});

export default brandReducer;
