import { DATA } from "../data/data";

const initState = {
    photos: DATA.photos,
    comments: DATA.comments
};

export const Reducer = (state = initState, action) => {
    // console.log(action);
    switch (action.type) {
        case 'ADD_COMMENT':
            const currentdate = new Date();
            const datetime = "Posted on: " + currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() + " at "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();

            action.payLoad.time = datetime;
            return {
                ...state,
                comments: state.comments.concat(action.payLoad)
            }
        default:
            return state;
    }
}

