import { combineReducers } from 'redux';

import { ApplicationState } from 'src/app/types';
import { photosReducer } from 'src/features/photos/data/store/photos.reducer';

export const rootReducer = combineReducers<ApplicationState>({
    photos: photosReducer,
});
