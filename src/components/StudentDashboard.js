import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendance } from '../redux/actions/attendanceActions';

const StudentDashboard = () => {
    const dispatch = useDispatch();
    const attendanceRecords = useSelector((state) => state.attendance.attendanceRecords);

    useEffect(() => {
        dispatch(fetchAttendance());
    }, [dispatch]);

    return (
        <div>
            <h1>Student Dashboard</h1>
            <h2>Attendance Records</h2>
            <ul>
                {attendanceRecords.map((record) => (
                    <li key={record._id}>
                        {record.date} - {record.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentDashboard;
