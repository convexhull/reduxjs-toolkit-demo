import * as actionTypes from "./actionType";

export const asyncFetchCats = ({ text }) => {
    return (dispatch) => {
        dispatch(fetchCatsStart({ text }));
        setTimeout(() => {
            dispatch(fetchCatsSuccess(`https://cataas.com/cat/says/${text}`));
        }, 1000);
    };
};

const fetchCatsStart = () => {
    return {
        type: actionTypes.FETCH_CATS_START,
    };
};

const fetchCatsSuccess = (url) => {
    return {
        type: actionTypes.FETCH_CATS_SUCCESS,
        payload: {
            url,
        },
    };
};

const fetchCatsFailure = () => {
    return {
        type: actionTypes.FETCH_CATS_FAILURE,
    };
};
