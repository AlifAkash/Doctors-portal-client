import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import SideBar from '../SideBar/SideBar';

const containerStyle = {
    position : "absolute",
    right : 0,
    backgroundColor : "#F4FDFB",
    height : "100%"
}

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [appointmentsByDate, setAppointmentsByDate] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch("http://localhost:5000/appointmentsByDate", {
            method : "POST",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({date : selectedDate, email : loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointmentsByDate(data));

    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointmentsByDate={appointmentsByDate}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;