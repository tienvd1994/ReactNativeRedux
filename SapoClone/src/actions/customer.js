import * as types from './../constants/ActionTypes';

function requestPost(keyword) {
    return {
        type: types.REQUEST_POSTS,
        keyword
    }
}

function receivePostSuccess(keyword, json) {
    return {
        type: types.RECEIVE_POSTS_SUCCESS,
        data: json,
    }
}

function receivePostFailure(keyword, json) {
    return {
        type: types.RECEIVE_POSTS_FAILURE,
        data: json,
    }
}

export function fetchCustomer(keyword) {
    return function (dispatch) {
        dispatch(requestPost(keyword));

        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json =>
                dispatch(receivePostSuccess(keyword, json)))
            .catch((error) => {
                dispatch(receivePostFailure(error))
            })
    }
}