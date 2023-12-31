// booking component for appointments
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Calendar from 'react-calendar';
//import axios from 'axios';

type Facials = {
  facials: {
  _id: number;
  photo: string;
  name: string;
  days: string;
  slot: string;
  slot2: string;
  slot3: string;
  slot4: string;
  slot5: string;
  slot6: string;
  slot7: string;
  
  } 
};

export default function Bookings({ facials }: Facials ) {
 
  const handleDayClick = (date: Date) => {
    // Handle the selected date
    setSelectedDay(date);
    setSelectedDate(date);
  };
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  return (
    <>
     { facials && (
      <div >
      <div
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
                Book an appointment
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
                  value={selectedDay}
                />
              </a>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
      <div
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
            {/* add alert */}
            <div className="modal-body">
              {/* alert component */}
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
                  <button className="btn btn-sm">view your appointment</button>
                </div>
              </div>
              {/* end of add alert */}
              {/* list group component */}
              <div className="">
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3 ">
                  <Image
                    src={facials.photo}
                    className="avatar"
                    width={200}
                    height={100}
                    alt="..."
                  />
                  <div className="d-flex gap-2 w-100 justify-content-between mt-1">
                    <div className="">
                      <h6 className="fs-5 me-2">{facials && facials.name}</h6>
                      <h6 className="">10-am 6pm</h6>
                    </div>
                    <small className="opacity-50 text-nowrap">
                      <h6 className=""> {facials.days}</h6>
                      <h6 className="">{facials.slot}</h6>
                      {/* select time slot component */}
                      <select
                      //   value={selectedSlot}
                      //   onChange={(e) => setSelectedSlot(e.target.value)}
                      >
                        <option value="">Select a time slot</option>
                        <option value="slot">{facials && facials.slot}</option>
                        <option value="slot">{facials.slot2}</option>
                        <option value="slot">{facials.slot3}</option>
                        <option value="slot">{facials.slot4}</option>
                        <option value="slot">{facials.slot5}</option>
                        <option value="slot">{facials.slot6}</option>
                        <option value="slot">{facials.slot7}</option>
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
                  // onClick={handleSubmit}
                >
                  Book Appointment
                </button>
                {/* */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-md"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Book an appointment
      </button>
   
    </div>
      )}
    </>
  );
}