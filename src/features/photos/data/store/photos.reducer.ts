import { createReducer } from '@reduxjs/toolkit';

import { PhotosState } from 'src/features/photos/data/store/photos.state';
import { FETCH_PHOTOS } from 'src/features/photos/data/store/photos.action';

const initialState: PhotosState = {
    photosData: undefined,
    error: undefined,
    isFetching: false,
};

export const photosReducer = createReducer<PhotosState>(initialState, (builder) => {
    builder
        .addCase(FETCH_PHOTOS.STARTED, (state) => {
            state.isFetching = true;
        })
        .addCase(FETCH_PHOTOS.COMPLETED, (state, action) => {
            state.isFetching = false;
            state.photosData = {
                ...action.payload,
                photos:
                    action.payload.page > 1 && state.photosData
                        ? [...state.photosData.photos, ...action.payload.photos]
                        : action.payload.photos,
            };
        })
        .addCase(FETCH_PHOTOS.FAILED, (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
        });
});
