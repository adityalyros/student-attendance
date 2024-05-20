import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { markAttendance } from '../redux/actions/attendanceActions';

const MarkAttendanceForm = () => {
    const [studentId, setStudentId] = useState('');
    const [classId, setClassId] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('Present');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(markAttendance({ studentId, classId, date, status }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Student ID"
                required
            />
            <input
                type="text"
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                placeholder="Class ID"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
            </select>
            <button type="submit">Mark Attendance</button>
        </form>
    );
};

export default MarkAttendanceForm;
