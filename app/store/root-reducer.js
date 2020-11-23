import { combineReducers } from 'redux';
import { reducer as userReducer } from './reducers/reducer';
import { pickupReducer } from './reducers/pickupReducer';
import { practiceReducer } from './reducers/formPracticeReducer'



const rootReducer = combineReducers({
    userReducer,
    pickupReducer,
    practiceReducer,

});

export default rootReducer;


