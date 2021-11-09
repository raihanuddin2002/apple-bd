import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        axios.get("https://damp-cliffs-56350.herokuapp.com/services")
            .then(res => {
                setLoading(true);
                if(res){
                    setServices(res.data);
                    setLoading(false);
                }
            })
    },[])

    return (
        <div>
        {/* Hero section */}
        <section className="container hero-section">
            <div className="row">
                <div className="hero-content d-flex mt-5 align-items-center flex-xxl-row flex-column">
                    <div className="hero-left col-xxl-6">
                        <h4 className="text-uppercase text-light-red fw-bold fs-5 mb-4">Best Destinations around the world</h4>
                        <h1 className="hero-header ff-volkhob text-royel-blue fw-bold fs-4rem mb-4">Travel, enjoy and live a new and full life</h1>
                        <p className="text-gray mb-4">The gladdest moment in human life, me thinks, is a departure into unknown lands- Sir Richard Burton I've used the above quote before, but it seems particularly appropriate for this trip. We are beyond excited to finally be travelling again! We are flying to Amsterdam tomorrow, where we will spend four nights. Our B&B is located in central Amsterdam, and we expect to walk to pretty much everything.</p>
                        <button className="btn-warning border-0 px-4 py-3 rounded">Find out more</button>
                        <button className="btn ms-4"><span className="d-flex align-items-center"><span className="text-light-red fs-1 me-3"><i className="fas fa-play-circle"></i></span> <span className="text-muted">Play Demo</span></span></button>
                    </div>
                    <div className="hero-right col-xxl-6">
                        <img className="img-xl-fluid w-100 h-100" srcSet="https://i.ibb.co/Ptkpv6k/Image-1.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        {/* Services */}
        <section className="container">
            <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
            <h5 className="text-gray text-center">SERVICES</h5>
            <h1 className="fs-1 ff-volkhob text-center">Choose Your Destination</h1>
            <div className="blank mb-5"></div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">

                {
                    !isLoading && services.map(service => <Service key={service._id} data={service}></Service>)
                }
                {
                    isLoading &&<div> <h1 className="text-center">Loading...  
                            <div className="spinner-grow text-primary" role="status"></div>
                            <div className="spinner-grow text-secondary" role="status"></div>
                            <div className="spinner-grow text-success" role="status"> </div>
                            <div className="spinner-grow text-danger" role="status"></div>
                            <div className="spinner-grow text-warning" role="status"></div>
                            <div className="spinner-grow text-info" role="status">
                            </div>
                            <div className="spinner-grow text-dark" role="status"></div>
                            </h1> </div>
                       
                }
                
            </div>
        </section>

 
        {/* <!-- Blank --> */}
            <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
            {/* <!-- Blank --> */}
            {/* <!-- top selling section --> */}
            <section className="container my-5 top-selling-section">
                <h5 className="text-gray text-center">Top Selling</h5>
                <h1 className="fs-1 ff-volkhob text-center">Top Destinations</h1>
                <div className="blank d-none d-md-block"  style={{height:"30px"}}></div>
                <div className="row">
                    {/* <!-- className="col-md-6 col-xl-4 text-center align-content-center" --> */}
                    <div className="d-flex  justify-sm-content-center align-items-center flex-column flex-lg-row justify-content-lg-evenly">
                        <div className="col-12 col-sm-8 col-lg-3 mb-4">
                            <div className="card category-card mx-auto border-0 shadow-sm p-3 bg-body rounded-3">
                                <img srcSet="https://i.ibb.co/9hfjyHh/rome.png " width="200 " height="350 " className="card-img-top" alt="... "/>
                                <div className="card-body d-flex justify-content-between text-muted">
                                    <p className="card-text mb-0">Rome, Italty</p>
                                    <p className="card-text mb-0">$5.4K</p>
                                </div>
                                <p className="mt-0"><i className="fas fa-location-arrow"></i><small className="text-muted ms-3">8 Days Trip</small></p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-lg-3 mb-4">
                            <div className="card category-card border-0 shadow-sm p-3 bg-body rounded-3">
                                <img srcSet="https://i.ibb.co/71ssSd2/us.png" width="200 " height="350 " className="card-img-top " alt="... "/>
                                <div className="card-body d-flex justify-content-between text-muted">
                                    <p className="card-text mb-0">London, UK</p>
                                    <p className="card-text mb-0">$4.4K</p>
                                </div>
                                <p className="mt-0"><i className="fas fa-location-arrow"></i><small className="text-muted ms-3">10 Days Trip</small></p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-lg-3 mb-4">
                            <div className="card category-card border-0 shadow-sm p-3 bg-body rounded-3">
                                <img srcSet="https://i.ibb.co/dB19Ysd/eupore.png" width="200" height="350" className="card-img-top " alt="... "/>
                                <div className="card-body d-flex justify-content-between text-muted">
                                    <p className="card-text mb-0">Full Europe</p>
                                    <p className="card-text mb-0">$15K</p>
                                </div>
                                <p className="mt-0"><i className="fas fa-location-arrow"></i><small className="text-muted ms-3">1 month Trip</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
            </section>

        {/* Categories */}
            <section className="container my-5 category-section">
                <h5 className="text-gray text-center">CATEGORY</h5>
                <h1 className="fs-1 ff-volkhob text-center">We Offer Best Services</h1>
                <div className="blank mb-5"></div>
                <div className="row gx-md-5 gy-md-5">
                    <article className="col-md-6 col-xl-3 text-center align-content-center">
                        <div className="border border-1 py-3 px-5 h-100">
                            <img srcSet="https://i.ibb.co/rtMSJgf/dish-1.png" alt=""/>
                            <h3>Calculated Weather </h3>
                            <p className="p-3">Built Wicket longer admire do barton vanity itself do in it.</p>
                        </div>
                    </article>

                    <article className="col-md-6 col-xl-3 text-center">
                        <div className="border border-1 py-3 px-5 h-100">
                            <img srcSet="https://i.ibb.co/0CDsFdk/Group-51.png" alt=""/>
                            <h3>Best Flights</h3>
                            <p className="p-3">Engrossed listening. Park gate sell they west hard for the.</p>
                        </div>
                    </article>
                    <article className="col-md-6 col-xl-3 text-center">
                        <div className="border border-1 py-3 px-5 h-100">
                            <img srcSet="https://i.ibb.co/w0WzDbF/dish-3.png" alt=""/>
                            <h3>Local Events</h3>
                            <p className="p-3">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                        </div>
                    </article>
                    <article className="col-md-6 col-xl-3 text-center">
                        <div className="border border-1 py-3 px-5 h-100">
                            <img srcSet="https://i.ibb.co/5YP1TqK/dish-2.png" alt=""/>
                            <h3>Customization</h3>
                            <p className="p-3">We deliver outsourced aviation services for military customers</p>
                        </div>
                    </article>
                </div>
                <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
            </section>
    {/* <!-- Easy and fast section --> */}
            <section className="container my-5 easy-fast-section">
                <div className="row">
                    <div className="easy-fast-main d-flex flex-wrap justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 easy-fast-left px-4 mb-4">
                            <h5 className="text-gray">Easy and Fast</h5>
                            <h1 className="fs-1 ff-volkhob">Book your next trip in 3 easy steps</h1>
                            <article className="d-flex align-items-center">
                                <img srcSet="https://i.ibb.co/ZGs5cKY/Group-7.png" alt=""/>
                                <div className="mt-4">
                                    <h5 className="ps-4">Choose Destination</h5>
                                    <p className="text-gray ps-4"> The place where someone is going or where something is being sent or taken: We arrived at our destination tired and hungry. </p>
                                </div>
                            </article>
                            <article className="d-flex align-items-center">
                                <img srcSet="https://i.ibb.co/FgBwsLX/Group-12.png" alt=""/>
                                <div className="mt-4">
                                    <h5 className="ps-4">Make Payment</h5>
                                    <p className="text-gray ps-4">Payment is the transfer of money or goods and services in exchange for a product or service. </p>
                                </div>
                            </article>
                            <article className="d-flex align-items-center">
                                <img srcSet="https://i.ibb.co/StLND5S/Group-11.png" alt=""/>
                                <div className="mt-4">
                                    <h5 className="ps-4">Reach Airport on Selected Date</h5>
                                    <p className="text-muted ps-4">An airport is an aerodrome with extended facilities, mostly for commercial air transport. Airports often have facilities to park and maintain aircraft,  </p>
                                </div>
                            </article>
                        </div>
                        <div className="col-6 easy-fast-right d-flex justify-content-center flex-grow-1 px-5">
                            <div className="col-12 col-md-10">
                                <div className="category-card border-0 shadow-lg p-4 bg-body rounded-3">
                                    <img srcSet="https://i.ibb.co/JK9YHhW/Rectangle-17easy.jpg" width="321" height="161" className="card-img-top " alt="... "/>
                                    <h5 className="mt-4">Trip To Greece</h5>
                                    <small className="text-muted">14-29 June | |by Robbin joseph</small>
                                    <div className="text-muted my-3">
                                        <button className="border-0 bg-muted rounded-circle py-2 px-3 me-3 text-gray"><i className="fas fa-location-arrow"></i></button>
                                        <button className="border-0 bg-muted rounded-circle py-2 px-3 me-3 text-gray"><i className="fas fa-globe-europe"></i></button>
                                        <button className="border-0 bg-muted rounded-circle py-2 px-3 text-gray"><i className="far fa-map"></i></button>
                                    </div>
                                    <div className="saved d-flex justify-content-between">
                                        <p className="mt-0"><i className="fas fa-coins"></i><small className="text-muted ms-2"> 24 people going</small></p>
                                        <p><i className="far fa-heart"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Testimonial section --> */}
        <section className="container my-5">
            <div className="row">
                <div className="col-12 p-5 testimonial-section-main d-flex flex-wrap justify-content-between align-items-center shadow-lg ">
                    <div className="col-12 col-md-6 testimonial-left text-center">
                        <h5 className="text-gray">TESTIMONIAL</h5>
                        <h1 className="fs-1 ff-volkhob fw-bold mb-5">What people say about Us.</h1>
                    </div>
                    <div className="col-12 col-md-6 testimonial-right text-center">
                        <p className="text-muted"><q>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</q></p>

                        <div className="identity d-flex justify-content-center align-items-center">
                            <div className="identity-img me-3 text-center">
                                <img srcSet="https://i.ibb.co/qM3H29N/Imagetesti.png" alt=""/>
                            </div>
                            <div className="identity-content">
                                <h5>Mike taylor</h5>
                                <small className="text-muted">Lahore, Pakistan</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Client section --> */}
        <section className="container">
            <div className="row">
                <div className="client-section d-flex justify-content-center align-items-center mt-4">
                    <img className="img-fluid" srcSet="images/logosclint.png" alt=""/>
                </div>
            </div>
        </section>
        {/* <!-- subcribe section --> */}
        <section className="container subscribe-section bg-secondary">
            <div className="row">
                <h2 className="subscribe-header text-center fs-1 text-royel-blue mb-5">Subscribe to get information, latest news and other interesting offers about Cobham</h2>
                <div className="submit-section text-center">
                    <input type="email" placeholder="Your Email" className="px-4 py-3 border border-warning rounded-3 me-3 mb-3" cols="20" style={{width: "50%"}}/>
                    <button className="btn-warning border-0  px-4 py-3 rounded-3" type="submit">Subscribe</button>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Home;