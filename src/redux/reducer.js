import { DATA } from "../data/data";
import * as actionTypes from './actionTypes';

const initState = {
    photos: DATA.photos,
    comments: DATA.comments,
    commentLoading: true,
    loadingFailed: false
};

export const Reducer = (state = initState, action) => {
    // console.log(action);
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat(action.payLoad)
            }
            
        case actionTypes.LOAD_COMMENTS:
            const comments = action.payLoad;
            return {
                ...state,
                comments: comments,
                commentLoading: false
            }

        case actionTypes.ADD_PHOTO:
            return {
                ...state,
                photos: state.photos.concat(action.payLoad)
            }

        case actionTypes.LOAD_PHOTOS:
            return {
                ...state,
                photos: action.payLoad
            }

        default:
            return state;
    }
}

