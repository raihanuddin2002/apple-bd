import React from 'react';
import Menu from './Menu/Menu';

const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-2">
                        <h5 className="py-4 d-none d-lg-block fs-3 text-center bg-light-pink">Menu</h5>
                        <Menu></Menu>
                    </div>
                    <div className="col-sm-12 col-lg-10">
                        <h5 className="card-header text-center display-4 bg-light-pink">DashBoard</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;