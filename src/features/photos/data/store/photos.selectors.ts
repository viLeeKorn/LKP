import { Selector, createSelector } from 'reselect';

import { PhotosData } from 'src/features/photos/data/store/photos.model';
import { ApplicationState } from 'src/app/types';
import { PhotosState } from 'src/features/photos/data/store/photos.state';

const getPhotosState: Selector<ApplicationState, PhotosState> = createSelector(
    (state) => state.photos,
    (photos) => photos
);

export const getIsPhotosFetching: Selector<ApplicationState, boolean> = createSelector(
    getPhotosState,
    (photos) => photos.isFetching
);

export const getPhotosError: Selector<ApplicationState, Error | undefined> = createSelector(
    getPhotosState,
    (photos) => photos.error
);

export const getPhotos: Selector<ApplicationState, PhotosData | undefined> = createSelector(
    getPhotosState,
    (photos) => photos.photosData
);
