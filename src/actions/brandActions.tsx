import { ActionCreatorWithOptionalPayload, ActionCreatorWithPayload, Dispatch, createAction } from '@reduxjs/toolkit';
import * as Actions from './types';
import { AdsItemInterface, BrandDataInterface, UpdateSavedBrandListPayload } from '@/app/Interface/brandInterface';

/**
 * @desc Set Industry field
 */
export const setIndustryField: ActionCreatorWithPayload<string, string> = createAction(Actions.SET_INDUSTRY_FIELD);

/**
 * @desc Set Sort field
 */
export const setSortingType: ActionCreatorWithPayload<string, string> = createAction(Actions.SET_SORTING_TYPE);

/**
 * @desc set task details input
 */
export const setSavedBrandList: ActionCreatorWithPayload<BrandDataInterface[], string> = createAction(
  Actions.SET_SAVED_BRAND_LIST,
);

/**
 * @desc update task details input
 */
export const updateSavedBrandList: ActionCreatorWithPayload<UpdateSavedBrandListPayload, string> = createAction(
  Actions.UPDATE_SAVED_BRAND_LIST,
);

/**
 * @desc clear task details input
 */
export const clearSavedBrandList: ActionCreatorWithOptionalPayload<undefined, string> = createAction(
  Actions.CLEAR_SAVED_BRAND_LIST,
);

/**
 * @desc set task details input
 */
export const setFilteredList: ActionCreatorWithPayload<BrandDataInterface[], string> = createAction(
  Actions.SET_FILTERED_LIST,
);

/**
 * @desc update task details input
 */
export const updateFilteredList: ActionCreatorWithPayload<BrandDataInterface[], string> = createAction(
  Actions.UPDATE_FILTERED_LIST,
);

/**
 * @desc clear task details input
 */
export const clearFilteredList: ActionCreatorWithOptionalPayload<undefined, string> = createAction(
  Actions.CLEAR_FILTERED_LIST,
);

/**
 * @desc set task details input
 */
export const setBrandList: ActionCreatorWithPayload<BrandDataInterface[], string> = createAction(
  Actions.SET_BRAND_LIST,
);

/**
 * @desc update task details input
 */
export const updateBrandList: ActionCreatorWithPayload<BrandDataInterface[], string> = createAction(
  Actions.UPDATE_BRAND_LIST,
);

/**
 * @desc clear task details input
 */
export const clearBrandList: ActionCreatorWithOptionalPayload<undefined, string> = createAction(
  Actions.CLEAR_BRAND_LIST,
);

/**
 * @desc set task details input
 */
export const setFilteredBrandCard: ActionCreatorWithPayload<AdsItemInterface[], string> = createAction(
  Actions.SET_FILTERED_BRAND_CARD,
);

/**
 * @desc update task details input
 */
export const updateFilteredBrandCard: ActionCreatorWithPayload<AdsItemInterface[], string> = createAction(
  Actions.UPDATE_FILTERED_BRAND_CARD,
);

/**
 * @desc clear task details input
 */
export const clearFilteredBrandCard: ActionCreatorWithOptionalPayload<undefined, string> = createAction(
  Actions.CLEAR_FILTERED_BRAND_CARD,
);


export const clearBrandReducerData: any = () => (dispatch: Dispatch) => {
  dispatch(setIndustryField(''));
  dispatch(setSortingType(''));
  dispatch(clearSavedBrandList());
  dispatch(clearFilteredList());
  dispatch(clearBrandList());
};
