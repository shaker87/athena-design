import React from 'react';
import './Service.css';
import experienceDesign from '../../../Image/Service/experienceDesign.png';
import interfaceDesign from '../../../Image/Service/interfaceDesign.png';
import protoTyping from '../../../Image/Service/photoTyping.png';
import illustration from '../../../Image/Service/illustration.png';
import ServiceDetails from '../Home/ServiceDetails/ServiceDetails';

const Service = () => {
    const serviceFakeData = [
        {
            id: 1,
            title: 'Experience Design',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
            image: experienceDesign
        },
        {
            id: 2,
            title: 'Interface Design',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
            image: interfaceDesign
        },
        {
            id: 3,
            title: 'ProtoTyping',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
            image: protoTyping
        },
        {
            id: 4,
            title: 'Illustration',
            description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
            image: illustration
        },

    ]
    return (
        <div className="service-area">
            <div className="container">
                <div className="area-title">
                    <h1>What we do</h1>
                    <p>Our main focus is to make the User Experience very <span className="text-break">simple and easy. Simplicity is our Strength</span></p>
                </div>
                <div className="row">
                    {
                        serviceFakeData.map(service => <ServiceDetails service={service} key={service.id}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;