import React from 'react';

const Service = () => {
    const services = ['Service 1', 'Service 2', 'Service 3'];
    return (
        <div>
            <h1>List of Services:</h1>
            <ul>
                {services.map((service, index) => (
                <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
};

export default Service;