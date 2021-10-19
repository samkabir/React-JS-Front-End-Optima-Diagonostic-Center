import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container">
            <h2 className="text-primary">The new way to healty life</h2>
            <div className="we-are">
                <h3 className="text-primary">Who We Are</h3>
                <p>Optima Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Optima Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>
                <br />
            </div>
            <div className="goals">
                <h3 className="text-primary">Our Goal</h3>
                <p>To establish a referral Diagnostic and Medical Services Centre.</p>
                <br />
            </div>
            <div className="objs">
                <h3 className="text-primary">Our Objective</h3>
                <ul>
                    <li>To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.</li>
                    <li>Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.</li>
                    <li>To promote Health Education & Medical Services.</li>
                    <li>Day care Centre for follow-up cardiac renal and oncology patients.</li>
                    <li>To build a full fledged specialized (Tertiary) Hospital.</li>
                    <li>Set up Satellite collection Centre.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;