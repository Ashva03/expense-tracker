import { combineReducers } from 'redux';
import * as Actions from '../actions/types';
import { createReducer } from '@/helper/reduxHelpers';

const userLoaderReducer = createReducer({
    initialState: false,
    actionType: Actions.SET_COMPANY_LOADING,
});

const companyListReducer = createReducer({
    initialState: [],
    actionType: Actions.SET_COMPANY_LIST,
});

const companyReducer = combineReducers({
    loading: userLoaderReducer,
    companyList: companyListReducer
});

export default companyReducer;
