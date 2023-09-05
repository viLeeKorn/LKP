import { PhotosData } from 'src/features/photos/data/store/photos.model';

export type PhotosState = {
    photosData: PhotosData | undefined;
    isFetching: boolean;
    error?: Error;
};
