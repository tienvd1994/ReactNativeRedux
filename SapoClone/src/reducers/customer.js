import * as types from './../constants/ActionTypes';

function customer(
    state = {
        isFetching: false,
        items: [],
        error: ''
    },
    action
) {
    switch (action.type) {
        case types.REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })

        case types.RECEIVE_POSTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items = action.data
            })

        case types.RECEIVE_POSTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error = action.data
            })

        default:
            return state;
    }
}

export default customer;