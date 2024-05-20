import axios from 'axios';

export const loadUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: 'USER_LOADED',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

export const login = ({ username, password }) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post('/api/auth/login', body, config);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        });
        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
};
