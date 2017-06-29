import {
    FETCH_USERS
} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            console.log(action.payload);
            // debugger;
            return [...state, ...action.payload.data]; //palauttaa aikasemman listan kayttajista seka uuden listan 
    }

    return state;
}