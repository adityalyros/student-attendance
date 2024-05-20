import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendance } from '../redux/actions/attendanceActions';

const TeacherDashboard = () => {
    const dispatch = useDispatch();
    const attendanceRecords = useSelector((state) => state.attendance.attendanceRecords);

    useEffect(() => {
        dispatch(fetchAttendance());
    }, [dispatch]);

    return (
        <div>
            <h1>Teacher Dashboard</h1>
            <h2>Attendance Records</h2>
            <ul>
                {attendanceRecords.map((record) => (
                    <li key={record._id}>
                        {record.studentId} - {record.date} - {record.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherDashboard;
