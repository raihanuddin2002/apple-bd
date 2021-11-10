import React from 'react';
import Menu from '../DashBoard/Menu/Menu';

const Pay = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="py-2 mt-3 mt-lg-5 display-3 bg-light-pink text-center mb-4">DashBoard</h2>
                    
                    <div className="col-sm-12 col-lg-2 ps-lg-0">
                        <h5 className="d-none d-lg-block card-header text-center display-4 bg-light-pink fixed">Menu</h5>
                        <Menu></Menu>
                    </div>
                    <div className="col-sm-12 col-lg-10 pe-lg-0 scroll-div">
                        <h1 className="display-5 text-center my-5 text-pink">Payment system coming soon...</h1>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Pay;