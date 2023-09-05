import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'src/app/data/store/reducers/root.reducer';
import { rootSaga } from 'src/app/domain/root.saga';
import { ApplicationState } from 'src/app/types';

export let store: Store<ApplicationState>;

export const createPureStore = () => {
    return (store = configureStore({
        reducer: rootReducer,
        middleware: [sagaMiddleware],
    }));
};

export const sagaMiddleware = createSagaMiddleware();

export const createStore = async (): Promise<Store<ApplicationState>> => {
    createPureStore();
    await sagaMiddleware.run(rootSaga).toPromise();

    return store;
};
