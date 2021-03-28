import React from 'react';
import AppointmentShortList from '../AppointmentAhortList/AppointmentShortList';

const AppointmentByDate = ({appointmentsByDate}) => {
    return (
        // <div>
        //     <h2>AppointmentByDate : {appointmentsByDate.length}</h2>
        //     {
        //         appointmentsByDate.map(appointments => <li key={appointments._id}>{appointments.name}</li>)
        //     }
        // </div>
        <div>
            <h2 className="textPrimary text-center">Appointments</h2>
            {
                appointmentsByDate.length ?
                 <AppointmentShortList appointments={appointmentsByDate} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;