import React from 'react';

const About = () => {
    return (
        <div>
            <div className="about-container text-center">
                <div className="about-container-clone d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="display-1 text-white shadow-lg">WECOME TO ABOUT PAGE</h1>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="container my-5 py-md-5">
                <h1 className="display-3 text-primary mb-4">ABOUT US</h1>
                <p className="fs-5">Travelller BD is the largest independently owned travel agency headquartered in Dhaka, and consistently ranked among the top 50 largest in the Bangladesh."We are an employee-owned company with a passion for providing exemplary customer service, leveraging our expertise and technology to deliver innovative travel solutions in a gratifying work environment."Travelller BD  is headquartered in Los Angeles, California, with branch locations throughout the state, specializing in corporate travel solutions and custom vacation travel planning.
                Our corporate centers are located in Los Angeles, Sacramento and Irvine. Our leisure vacation travel locations include Los Angeles, Sacramento, Irvine, Palos Verdes/South Bay, Pasadena and Santa Barbara/Camarillo. We are pleased to introduce you our Management Teams:
                Meet our Executive Leadership team here
                Meet our Corporate Travel Managers here
                Meet our Client Service Managers here</p>
            </div>

            {/* Overview */}
            <div style={{background: "#cdcdcd"}}>
            <div className="container py-5">
                <div className="courses-header text-center">
                    <h2 className="card-header text-white courses-heading py-4 mt-lg-5 display-3 bg-dark">OVERVIEW</h2>
                    
                </div>

                <div>
                <table className="table table-light table-striped table-responsive table-bordered fs-4 p-2">
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Established.</td>
                                    <td>2003</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Branch</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Division</td>
                                    <td>5</td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Period</td>
                                    <td>3 in a year</td>
                                </tr>

                                <tr>
                                    <td> 5</td>
                                    <td>Manager</td>
                                    <td> 20</td>
                                    
                                </tr>

                                <tr>
                                    <td> 6</td>
                                    <td>Program</td>
                                    <td> 34</td>
                                    
                                </tr>

                                <tr>
                                    <td> 7</td>
                                    <td>Countries</td>
                                    <td>38</td>
                                    
                                </tr>

                                <tr>
                                    <td> 8</td>
                                    <td> CEO</td>
                                    <td>6</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;