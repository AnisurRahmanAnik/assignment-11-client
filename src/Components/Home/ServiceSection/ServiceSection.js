import React, { useEffect, useState } from 'react';
import ServiceSectionCard from '../ServiceSectionCard/ServiceSectionCard';

const ServiceSection = () => {

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5002/service')
            .then(res => res.json())
            .then(data => setService(data))

    }, [])


    return (
        <div className="row mt-5">


            <div className="text-center">
                <h3>services</h3>   

            </div>

            {
                service.map(service => <ServiceSectionCard service={service}></ServiceSectionCard>)
            }
        </div>
    );
};

export default ServiceSection;