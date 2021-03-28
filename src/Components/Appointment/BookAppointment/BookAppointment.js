import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: "73-861-0674",
        id: 1,
        subject: "Teeth Orthodontics",
        visitingHour: "3.00-4.00",
        totalSpace: 6
    }, 
    {
        _id: "73-861-0684",
        id: 2,
        subject: "Cosmetic Dentistry",
        visitingHour: "4.00-5.00",
        totalSpace: 6
    },
    {
        _id: "73-861-0694",
        id: 3,
        subject: "Teeth Cleaning",
        visitingHour: "5.00-6.00",
        totalSpace: 6
    },
    {
        _id: "73-861-0664",
        id: 4,
        subject: "Cavity Protection",
        visitingHour: "6.00-7.00",
        totalSpace: 6
    },
    {
        _id: "73-861-0654",
        id: 5,
        subject: "Teeth Filling",
        visitingHour: "7.00-8.00",
        totalSpace: 6
    },
    {
        _id: "73-861-0644",
        id: 6,
        subject: "Teeth Orthodontics",
        visitingHour: "8.00-9.00",
        totalSpace: 6
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className="text-center primary mb-5">Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} date={date} booking={booking}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;