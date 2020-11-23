import { takeEvery, put, all, call, select } from 'redux-saga/effects';
import userState from '../../Hooks/userTokenHook';
import { useSelector } from 'react-redux';
import { user } from '../../selector/selector';
import { createEndPoint, createEndPoints } from './Localhost/localhost'






export function* registerUserSaga(action) {
    const { name, email, password } = action.payload;
    console.log(name)
    const url = createEndPoint("users");
    const setHeaders = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    };
    let response = yield fetch(url, setHeaders);
    response = yield response.json();
    console.log(response);

    yield put({ type: "REGISTER_USER", payload: response })
}
export function* loginUserSaga(action) {
    const { email, password } = action.payload;
    const url = createEndPoints("users", "login");
    let setHeaders = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
        })
    }
    let res = yield fetch(url, setHeaders);
    res = yield res.json();
    console.log(res);
    if (!res.error) {
        console.log("success")
        yield put({ type: "LOGIN_USER", payload: { token: res.token, name: res.user.name } })

    }
    if (res.error) {
        console.log("Error below test:");
        console.log(res);
        yield put({ type: "LOGIN_USER_ERROR", payload: res.error })
    }

}


export function* logoutUserSaga(action) {
    const { user } = action.payload;
    const logoutUser = { ...user, user: {} }

    yield put({ type: "LOGOUT_USER", payload: logoutUser.user })
}




export function* watchRegisterUserSaga() {
    yield takeEvery("REGISTER_USER_SAGA", registerUserSaga)
}

export function* watchLogoutUserSaga() {
    yield takeEvery("LOGOUT_USER_SAGA", logoutUserSaga)
}

export function* watchLoginUserSaga() {
    yield takeEvery("LOGIN_USER_SAGA", loginUserSaga)
}

