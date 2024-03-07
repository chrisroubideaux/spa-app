// booking component for appointments
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Calendar from 'react-calendar';
import axios from 'axios';


type Massages = {
  massages: {
  _id: number;
  photo: string;
  name: string;
  times: string;
  days: string;
  slot: string;
  slot2: string;
  slot3: string;
  slot4: string;
  slot5: string;
  slot6: string;
  slot7: string;

  };
};

export default function Bookings({massages }: Massages ) {
  
  const [selectedSlot, setSelectedSlot] = useState(''); // State to store the selected time slot
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
 
  const handleDayClick = (date: Date | null) => {
    // Handle the selected day
    setSelectedDay(null);
    setSelectedDate(date || new Date()); // Update the type of selectedDate to allow for null values
  };

// Function to handle the form submission
const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  if (!selectedSlot) {
    // Handle validation or show an error message
    return;
  }
  try {
    // Send a POST request to create or reschedule the appointment
    const response = await axios.post(
      'https://ivy-client-5e9387cb37e4.herokuapp.com/appointments',
      {
        massageId: massages._id, // Send the massage ID
        selectedSlot, // Send the selected time slot
        selectedDate, // Send the selected date
      }
    );

    // Handle successful appointment creation or rescheduling
    console.log('Appointment created or rescheduled:', response.data);

    if (selectedAppointment) {
      // Appointment has been rescheduled
      showAlertMessage(
        `Your appointment has been rescheduled ${selectedSlot}.`
      );
    } else {
      // New appointment has been created
      showAlertMessage(
        `Your appointment has been successfully created for one hour from ${selectedSlot}.`
      );
    }

    // Close the modal or perform any other desired actions
    setSelectedAppointment(null);
    setSelectedSlot('');
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Error creating or rescheduling appointment:', error);

    // Display an error message to the user
    showAlertMessage(
      `Selected time slot is not available. Please choose another time slot ${selectedSlot}.`
    );
  }
};

// Function to delete an appointment
const handleDeleteAppointment = async (appointmentId: any) => {
  try {
    // Send a DELETE request to delete the appointment
    const response = await axios.delete(
      `https://ivy-client-5e9387cb37e4.herokuapp.com/appointments/${appointmentId}`
    );

    // Handle successful appointment deletion
    console.log('Appointment deleted:', response.data);

    // Close the modal or perform any other desired actions
    alert('Appointment has been canceled successfully.');

    setSelectedAppointment(appointmentId);
  } catch (error) {
    // Handle errors (e.g., show an error message)
    console.error('Error deleting appointment:', error);

    // Display an error message to the user
    alert('Error deleting appointment. Please try again later.');
  }
};

// Function to display the alert message
const showAlertMessage = (message: React.SetStateAction<string>) => {
  setAlertMessage(message);
  setShowAlert(true);
};

  return (
    <>
    <div>
     { massages && (
    <><div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex={-1}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="fw-normal fs-5" id="exampleModalToggleLabel">
                    Book your tour
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                    <Calendar
                      className="calendar text-center "
                      onClickDay={handleDayClick}
                      value={selectedDay} />
                  </a>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div><div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex={-1}
          >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h6 className="fs-5" id="exampleModalToggleLabel2">
                      Select a time
                    </h6>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* alert component */}
                    {showAlert && (
                      <div
                        className="card mb-2"
                        style={{ maxWidth: '540px' }}
                        role="alert"
                      >
                        <div className="card-body">
                          <p className="fs-6">
                            {alertMessage} || {selectedDate.toDateString()}
                          </p>
                          <h3 className="fs-6"> </h3>
                        </div>
                        <div className="card-footer d-flex text-nowrap m-auto">
                          <button className="btn btn-sm" onClick={handleSubmit}>
                            view your appointment
                          </button>
                        </div>
                      </div>
                    )}
                    {/* list group component */}
                    <div className="">
                      <div className="list-group-item list-group-item-action d-flex gap-3 py-3 ">
                        {massages.photo && (
                          <Image
                            src={massages.photo}
                            className="avatar"
                            width={200}
                            height={100}
                            alt="..." />
                        )}

                        <div className="d-flex gap-2 w-100 justify-content-between mt-1">
                          <div className="">
                            <h6 className="fs-5 me-2">{massages.name}</h6>
                            <h6 className="">{massages.name}</h6>
                            <h6 className="">{massages.times}</h6>
                          </div>
                          <small className="opacity-50 text-nowrap">
                            <h6 className="">{massages.days}</h6>
                            <h6 className="">{massages.slot}</h6>
                            {/* select time slot component */}
                            <select
                              value={selectedSlot}
                              onChange={(e) => setSelectedSlot(e.target.value)}
                            >
                              <option value="">Select a time slot</option>
                              <option value={massages.slot}>
                                {massages.slot}
                              </option>
                              <option value={massages.slot2}>
                                {massages.slot2}
                              </option>
                              <option value={massages.slot3}>
                                {massages.slot3}
                              </option>
                              <option value={massages.slot4}>
                                {massages.slot4}
                              </option>
                              <option value={massages.slot5}>
                                {massages.slot5}
                              </option>
                              <option value={massages.slot6}>
                                {massages.slot6}
                              </option>
                              <option value={massages.slot7}>
                                {massages.slot7}
                              </option>
                            </select>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-md"
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                    >
                      Back to calendar
                    </button>

                    <div className="d-flex justify-content-end">
                      <button
                        type="submit"
                        className="btn btn-md"
                        onClick={handleSubmit}
                      >
                        Book Appointment
                      </button>

                      {/* */}
                    </div>
                  </div>
                </div>
              </div>
            </div><button
              className="btn btn-md"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              Book a tour
            </button></>
     )}
    </div>
  </>
  );
}
