import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watchRegisterUserSaga } from './sagas/userSagas';
import { rootSaga } from './sagas/root-sagas';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger'
//import "regenerator-runtime/runtime";
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}
const persist_Reducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];
const store = createStore(

    persist_Reducer,
    applyMiddleware(createLogger(), ...middleWare)
);

sagaMiddleware.run(rootSaga);

export const persist_Store = persistStore(store);
export default store;