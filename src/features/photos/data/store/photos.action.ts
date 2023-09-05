import { createAction } from '@reduxjs/toolkit';

import { PhotosParams, PhotosData } from 'src/features/photos/data/store/photos.model';

export const FETCH_PHOTOS = {
    TRIGGER: createAction<PhotosParams>('[Fetch Photos] Trigger'),
    STARTED: createAction('[Fetch Photos] Started'),
    COMPLETED: createAction<PhotosData>('[Fetch Photos] Completed'),
    FAILED: createAction<Error | undefined>('[Fetch Photos] Failed'),
};
