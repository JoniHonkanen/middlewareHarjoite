export default function ({ dispatch }) {
    return next => action => {

        //if action does not have payload
        //or payload does not have a .then property
        // we cdont care about it, send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        //make sure that actions promise resolves
        action.payload
            .then(function (response) {
                //create new action with old type but replace promise with
                //response data
                const newAction = { ...action, payload: response }
                dispatch(newAction);
                //lahettaa actionin uudestaan 
            });
    }
}


//sama toisella tavalla
/*
export default function({dispatch}){
    return function(next){
        return function(action){
            console.log(action);

            next(action);
        }
    }
}
*/