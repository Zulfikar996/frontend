const initialstate = {
    user:[]
}

export default (user = (state=initialstate,action) =>{
    switch (action.type) {
        case 'POST_USER_PENDING' :
            return {
                ...state,
            }
        case 'POST_USER_REJECTED' :
            return {
                ...state
            }
        case 'POST_USER_FULFILLED' :
            const newDataUser = [...state.user, action.payload.data.result]
            return {
                ...state,
                user : newDataUser
            }
        default:
            return state;
    }
})