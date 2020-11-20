import React from 'react';
import './PackageDetails.css';

const PackageDetails = ({ plan }) => {
    const style = { listStyle: 'none', paddingTop: '15px', color: '#3B3535', fontWeight: 'bold' }
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="package-box">
                <h1>${plan.price}<span className="highlights">{plan.packageName}</span></h1>
                <div className="borders"></div>
                {
                    plan.facility.map(facilities => <li style={style}>{facilities}</li>)
                }

                <button style={{ marginTop: '45px' }} className="custom-btn hide-btn">Order Now</button>
            </div>
        </div>
    );
};

export default PackageDetails;