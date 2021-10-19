import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="container">
            <h2 className="text-primary">Appointment</h2>
            <div className="appointment-container">
                <form className="row gy-2 gx-3 align-items-center">
                    <div className="col-auto appointment">
                        <h6>Choose a Doctor</h6>
                        <label className="visually-hidden" for="autoSizingSelect">Preference</label>
                        <select className="form-select" id="autoSizingSelect">
                        <option selected>Choose...</option>
                        <option value="1">Dr Asaduzzaman Rasel MBBS, FCPS(ENT)</option>
                        <option value="2">Prof. Dr. A K M Mustafa Hussain · MBBS, DTCD, MD (Chest)</option>
                        <option value="3">Prof. Dr. Zeenat Meraj</option>
                        <option value="4">Dr. Fahmida Zabeen</option>
                        <option value="5">Dr. Mohammad Rofiqul Islam</option>
                        <option value="6">Dr Md. Shah Alam</option>
                        </select>
                    </div>
                    <div className="appointment">
                        <h6>Name</h6>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control" id="autoSizingInput" placeholder="Name" />
                        </div>
                    </div>
                    <div className="appointment">
                        <h6>Address</h6>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="text" className="form-control" id="autoSizingInput" placeholder="Address" />
                        </div>
                    </div>
                    <div className="appointment">
                        <h6>Phone Number</h6>
                        <div className="col-auto">
                            <label className="visually-hidden" for="autoSizingInput">Name</label>
                            <input type="number" className="form-control" id="autoSizingInput" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="appointment">
                        <h6>Preferred Date</h6>
                        <div className="col-auto">
                        <input type="date" id="appointment" name="appointment" />
                        </div>
                    </div>
                    <div className="col-auto apt-btn">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;