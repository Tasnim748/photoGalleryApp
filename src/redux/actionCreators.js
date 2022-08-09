import * as actionTypes from './actionTypes';
import axios from 'axios';
import { URL } from '../url';

export const addComment = comment => {
    return {
        type: actionTypes.ADD_COMMENT,
        payLoad: comment
    }
}

export const addPhoto = photo => {
    return {
        type: actionTypes.ADD_PHOTO,
        payLoad: photo
    }
}

export const loadComments = comments => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payLoad: comments
    }
}

export const loadPhotos = photos => {
    return {
        type: actionTypes.LOAD_PHOTOS,
        payLoad: photos
    }
}

export const fetchPhotos = () => dispaz => {
    axios.get(`${URL}/photo`)
        .then(response => {
            dispaz(loadPhotos(response.data));
            axios.get(`${URL}/comments`)
                .then(response => {
                    dispaz(loadComments(response.data))
                })
        })
        .catch(err => {
            console.log('Fetching Failed');
        })
}