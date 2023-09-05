import { photosReducer } from 'src/features/photos/data/store/photos.reducer';

export type ApplicationState = {
    photos: ReturnType<typeof photosReducer>;
};
