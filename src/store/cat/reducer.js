import * as actionTypes from "./actionType";

const initState = {
    url: null,
    loading: false,
    error: null,
};

const CatsReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATS_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_CATS_SUCCESS:
            return {
                ...state,
                loading: false,
                url: action.payload.url,
            };
        case actionTypes.FETCH_CATS_FAILURE:
            return {
                ...state,
                loading: false,
                error: "errrr",
            };
        default:
            return {
                ...state,
            };
    }
};

export default CatsReducer;
