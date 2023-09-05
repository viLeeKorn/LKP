import { SagaIterator } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';

import { FETCH_PHOTOS } from 'src/features/photos/data/store/photos.action';
import { photosAPI } from 'src/features/photos/data/api/photos.api';

export function* fetchPhotos(action: ReturnType<typeof FETCH_PHOTOS.TRIGGER>): SagaIterator {
    try {
        yield put(FETCH_PHOTOS.STARTED());

        const response = yield call(photosAPI.getPhotos, action.payload);

        yield put(FETCH_PHOTOS.COMPLETED(response.data));
    } catch (err) {
        yield put(FETCH_PHOTOS.FAILED(err as Error));
    }
}

export function* listenForFetchPhotos(): SagaIterator {
    yield takeLatest(FETCH_PHOTOS.TRIGGER, fetchPhotos);
}
