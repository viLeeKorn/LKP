import { SagaIterator } from 'redux-saga';
import { spawn } from 'redux-saga/effects';

import { listenForFetchPhotos } from 'src/features/photos/domain/fetch-photos.saga';

export function* rootSaga(): SagaIterator {
    yield spawn(listenForFetchPhotos);
}
