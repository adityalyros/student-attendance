const initialState = {
    attendanceRecords: [],
    loading: true,
    error: null,
};

const attendanceReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'FETCH_ATTENDANCE_SUCCESS':
            return {
                ...state,
                attendanceRecords: payload,
                loading: false,
            };
        case 'FETCH_ATTENDANCE_FAILURE':
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case 'MARK_ATTENDANCE_SUCCESS':
            return {
                ...state,
                attendanceRecords: [...state.attendanceRecords, payload],
                loading: false,
            };
        case 'MARK_ATTENDANCE_FAILURE':
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default attendanceReducer;
