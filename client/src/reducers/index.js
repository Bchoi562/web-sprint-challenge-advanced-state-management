import {FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAIL, ADD_SMURF} from '../actions/index';

export const initialState = {
    smurfs:[],
    isLoading:false,
    error:''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SMURF_START':
            return {
                ...state,
                isLoading: true,
            }
        case 'FETCH_SMURF_SUCCESS':
            return {
                 ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ""
            }
            case 'FETCH_SMURF_ERROR':
                return {
                 ...state,
                 isLoading: false,
                 error: action.payload
                }
            case 'ADD_SMURF_START':
                  return {
                   ...state,
                   isLoading: true
                }
            case 'ADD_SMURF_SUCCESS':
                  return {
                   ...state,
                   isLoading: false,
                   error: '',
                   smurfs: action.payload
                }
            case 'ADD_SMURF_ERROR':
                  return {
                   ...state,
                   isLoading: false,
                   error: action.payload
                }
            case 'ADD_FORM_ERROR':
                    console.log(action.payload)
                  return {
                   ...state,
                   error: action.payload
                }
                default:
                  return state;
    }
}

export default reducer;


//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary