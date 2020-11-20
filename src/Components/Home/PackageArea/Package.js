import React from 'react';
import PackageDetails from '../Home/PackageDetails/PackageDetails';
import './Package.css';

const Package = () => {
    const fakePricePlan = [
        {
            id: 1,
            packageName: 'For Basic',
            price: 199,
            facility: [
                'Homepage', 'No Inner Page', 'Asset File', 'Source File', 'Free Stock Photos', '10 Days Free Support', '24/7 Support'
            ]
        },
        {
            id: 2,
            packageName: 'For Preferred',
            price: 399,
            facility: [
                'Homepage', '4 Inner Page', 'Asset File', 'Source File', 'Free Stock Photos', '20 Days Free Support', '24/7 Support'
            ]
        },
        {
            id: 3,
            packageName: 'For Elite',
            price: 599,
            facility: [
                'Homepage', '8 Inner Page', 'Asset File', 'Source File', 'Free Stock Photos', '30 Days Free Support', '24/7 Support'
            ]
        }
    ]
    return (
        <div className="package">
            <div className="container">
                <div className="area-title">
                    <h1>Choose Your Dedicated Team</h1>
                </div>
                <div className="row">
                    {
                        fakePricePlan.map(plan => <PackageDetails plan={plan} key={plan.id}></PackageDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Package;