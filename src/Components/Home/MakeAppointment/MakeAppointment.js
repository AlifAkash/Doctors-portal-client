import React from 'react';
import "./MakeAppointment.css";
import doctor from "../../../images/doctor.png";

const MakeAppointment = () => {
    return (
        <section className="Make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="primary text-uppercase">APPOINTMENT</h5>
                        <h2 className="my-4">Make An Appointment <br/> Today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam qui voluptate beatae commodi quod.</p>
                        <button className="btn btnPrimary mt-3">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;