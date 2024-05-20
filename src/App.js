import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/teacher/dashboard" component={TeacherDashboard} />
                <PrivateRoute path="/student/dashboard" component={StudentDashboard} />
                <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
