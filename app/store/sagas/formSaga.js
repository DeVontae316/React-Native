import { call } from 'react-native-reanimated';
import { takeEvery, put } from 'redux-saga/effects';
import { createEndPoint, createEndPoints } from './Localhost/localhost'

export function* addFormUpdateSaga(action) {
    const id = action.payload.id;
    const description = action.payload.description;
    const uri = createEndPoints("testform", id);

    const headers = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description
        })
    }
    let req = yield fetch(uri, headers);
    let res = yield req.json();

    console.log("update below")
    console.log(res);

    yield put({ type: "ADD_UPDATE", payload: res })
}

export function* addFormTestSaga(action) {
    const { description } = action.payload;
    const uri = createEndPoint("testform");
    const headers = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            description
        })
    }
    let post = yield fetch(uri, headers);
    let res = yield post.json();
    console.log("description below:");
    console.log(res);

    yield put({ type: 'ADD_FORM', payload: res })
}
export function* addDeleteFormSaga(action) {
    const id = action.payload.id
    console.log("id for delete below");
    console.log(id)
    const header = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }
    const uri = createEndPoints("testform", id);

    let req = yield fetch(uri, header);
    let res = yield req.json();
    console.log("delete message below");
    console.log(res);

    yield put({ type: "DELETE", payload: res })
}

export function* watchFormTestSaga() {
    yield takeEvery("ADD_FORM_SAGA", addFormTestSaga);
}
export function* watchFormTestUpdateSaga() {
    yield takeEvery("ADD_FORM_UPDATE_SAGA", addFormUpdateSaga);
}
export function* watchFormDeleteSaga() {
    yield takeEvery("ADD_DELETE_FORM_SAGA", addDeleteFormSaga);
}