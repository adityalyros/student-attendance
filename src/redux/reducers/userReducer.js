const initialState = {
    users: [],
    loading: true,
    error: null,
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                users: payload,
                loading: false,
            };
        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
