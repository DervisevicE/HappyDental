import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowAppointments.css';

const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctorGreeting, setDoctorGreeting] = useState('');
  const [totalAppointments, setTotalAppointments] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/appointments/getAppsByDid/11');
        const transformedAppointments = response.data.map(async (appointment) => {
          const dateTime = new Date(appointment.appointmentDateTime);
          let hours = dateTime.getHours();
          const minutes = dateTime.getMinutes();
          const ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
          const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

          return {
            ...appointment,
            date: dateTime.toLocaleDateString(),
            time: timeString,
          };
        });

        const resolvedAppointments = await Promise.all(transformedAppointments);
        setAppointments(resolvedAppointments);

        const today = new Date();
        const numAppointmentsToday = resolvedAppointments.filter(appointment => {
          const appointmentDate = new Date(appointment.appointmentDateTime);
          return appointmentDate.getDate() === today.getDate() &&
                 appointmentDate.getMonth() === today.getMonth() &&
                 appointmentDate.getFullYear() === today.getFullYear();
        }).length;
        setTotalAppointments(numAppointmentsToday);


        const doctorResponse = await axios.get('http://localhost:8080/doctors/11');
        const userId = doctorResponse.data.userId;

        const userResponse = await axios.get(`http://localhost:8080/users/${userId}`);
        const firstName = userResponse.data.firstName;

        setDoctorGreeting(`Hello Dr. ${firstName},\n\nHere are your appointments for today (${today.toLocaleDateString()}):`);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="show-appointments-container">
      <div className="greeting-message">
        <h1>{doctorGreeting}</h1>
        <p>Total appointments today: {totalAppointments}</p>
      </div>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAppointments;
