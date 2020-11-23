import { all } from 'redux-saga/effects';
import {
    watchLoginUserSaga,
    watchLogoutUserSaga,
    watchRegisterUserSaga,

} from './userSagas';

import { watchPickUpActionSaga, watchResetPickupAction } from './pickupSaga';
import { watchFormTestSaga, watchFormTestUpdateSaga, watchFormDeleteSaga } from './formSaga';


export function* rootSaga() {
    yield all([
        watchRegisterUserSaga(),
        watchLogoutUserSaga(),
        watchLoginUserSaga(),
        watchPickUpActionSaga(),
        watchFormTestSaga(),
        watchFormTestUpdateSaga(),
        watchFormDeleteSaga(),
        watchResetPickupAction(),


    ])
}