import { takeEvery, put, all, call, select } from 'redux-saga/effects';
import userState from '../../Hooks/userTokenHook';
import { useSelector } from 'react-redux';
import { user } from '../../selector/selector';
import { createEndPoint } from './Localhost/localhost';

function getExtension(photoArray) {
    const jpg = photoArray.every(photo => photo.endsWith(".jpg"));
    const png = photoArray.every(photo => photo.endsWith(".png"));

    if (jpg) {
        return "jpg";
    } else if (png) {
        return "png";
    }
}

function appendFormData(photoArray, title, price, label, description) {
    const formData = new FormData()
    const ext = getExtension(photoArray);
    for (let i = 0; i < photoArray.length; i++) {
        formData.append("upload", {
            uri: photoArray[i].replace("file://", ""),
            type: `image/${ext}`,
            name: photoArray[i].replace("file://", ""),
        });
    }
    formData.append("title", title)
    formData.append("price", price)
    formData.append("label", label)
    formData.append("description", description)

    return formData;
}

export function* addPickUpActionSaga(action) {
    const userState = yield select(user);
    console.log(userState.token + '  token here')
    const { label } = action.payload.category;
    const { description, price, title } = action.payload;

    const photos = action.payload.photos;
    const result = appendFormData(photos, title, price, label, description,);
    const endpoint1 = createEndPoint("description");
    const endpoint2 = createEndPoint("multiple_pickups");

    const setHeaders1 = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${userState.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            price,
            label,
            description,


        }),
    }
    const setHeaders2 = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${userState.token}`,
            "Content-Type": "multipart/form-data",
        },
        body: result,
    }

    let pickup = yield fetch(endpoint2, setHeaders2);
    let response = yield pickup.json();

    console.log(response);

    yield put({ type: "ADD_PICKUP", payload: response });


    /*let [fetch1, fetch2] = yield all([
        //description
        call(fetch, endpoint1, setHeaders1),
        //photo
        call(fetch, endpoint2, setHeaders2),
    ]);*/

    /*[fetch1, fetch2] = yield all([
        //description response
        fetch1.json(),
        //photo response 
        fetch2.json(),
    ]);*/

    /*console.log(fetch1);
    console.log(fetch2);*/

    /*yield all([
        put({ type: "ADD_PICKUP", payload: fetch1 }),
        put({ type: "ADD_DESCRIPTION", payload: fetch2 }),
    ])*/
}
export function* resetPickupSaga() {
    yield put({ type: "RESET_PICKUP" })
}
export function* watchResetPickupAction() {
    yield takeEvery("RESET_PICKUP_SAGA", resetPickupSaga)
}

export function* watchPickUpActionSaga() {
    yield takeEvery("ADD_PICKUP_SAGA", addPickUpActionSaga);
}

