import axios, { AxiosInstance } from 'axios';

import { PhotosParams } from 'src/features/photos/data/store/photos.model';

export class PhotosAPI {
    getPhotos = async (payload: PhotosParams) => {
        return axios.get('https://api.pexels.com/v1/curated', {
            headers: {
                Authorization: 'MChTyeTAR4D7xFIVMvI8Z1N2jcAsqnEL4W3v1SraBXIgze6kGehkUYlW',
            },
            params: payload,
        });
    };
}

export const photosAPI = new PhotosAPI();
