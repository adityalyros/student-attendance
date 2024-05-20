import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/users');
        dispatch({
            type: 'FETCH_USERS_SUCCESS',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'FETCH_USERS_FAILURE',
            payload: err.response.data,
        });
    }
};
