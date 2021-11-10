import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service/Service';

const Home = () => {
    const [products, setproducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect( () => {
        axios.get("https://secret-tor-67063.herokuapp.com/productsLimit")
            .then(res => {
                setLoading(true);
                if(res){
                    setproducts(res.data);
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
                        <h4 className="text-uppercase text-pink fw-bold fs-5 mb-4">Best Mobile Phones around the world</h4>
                        <h1 className="hero-header ff-volkhob text-royel-blue fw-bold fs-4rem mb-4">Buy, Use & Enjoy</h1>
                        <p className="text-gray mb-4">iPhone is more than the device in your hand. Find out why data protection, renewable energy and recycling are also part of iPhone.Every iPhone we've made — and we mean every single one — was built on the belief that a phone should be simple, beautiful, and magical to use.</p>
                        <Link to="/products"><button className="btn bg-pink border-0 px-4 py-3 rounded">Explore more</button></Link>
                    </div>
                    <div className="hero-right col-xxl-6">
                        <img style={{height: '70vh'}} className="img-xl-fluid w-100" srcSet="https://i.ibb.co/4d0hycb/Apple-iphone13-hero-09142021-inline-jpg-large-removebg-preview.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        {/* products */}
        <section className="container">
            <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
            <h5 className="text-gray text-center">Products</h5>
            <h1 className="fs-1 ff-volkhob text-center">Choose Products</h1>
            <div className="blank mb-5"></div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">

                {
                    !isLoading && products.map(service => <Service key={service._id} data={service}></Service>)
                }
                {
                    isLoading &&<div class="spinner-border text-danger p-4" role="status"><span class="visually-hidden">Loading...</span></div>
                       
                }
                
            </div>
        </section>

 
        {/* <!-- Blank --> */}
            <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
            {/* <!-- Blank --> */}
            {/* <!-- top selling section --> */}
            <section className="container my-5 top-selling-section">
                <h5 className="text-gray text-center">Top Selling</h5>
                <h1 className="fs-1 ff-volkhob text-center">Top Mobile Phones</h1>
                <div className="blank d-none d-md-block"  style={{height:"30px"}}></div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
                    {/* <!-- className="col-md-6 col-xl-4 text-center align-content-center" --> */}
                        <div className="col mb-4">
                            <div className="card mx-auto border-0 shadow-lg p-3 bg-body">
                                <img srcSet="https://i.ibb.co/SR8ms3b/i-Phone-12-iphone-12-mini-purple.webp" width="200 " height="350 " className="card-img-top" alt="... "/>
                                <div className="card-body d-flex justify-content-between text-muted">
                                    <p className="card-text mb-0">IPhone 12 Mini</p>
                                    <p className="card-text mb-0">$699</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card border-0 shadow-lg p-3 bg-body">
                                <img srcSet="https://i.ibb.co/GdRWh6f/iphone-13-f-e1631703251417-1024x552.jpg" width="200 " height="350 " className="card-img-top " alt="... "/>
                                <div className="card-body d-flex justify-content-between text-muted">
                                    <p className="card-text mb-0">IPhone 13 Mini</p>
                                    <p className="card-text mb-0">$600</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card border-0 shadow-lg p-3 bg-body">
                                <img srcSet="https://i.ibb.co/s1f4qJN/apple-iphone-12-pro-max.jpg" width="200" height="350" className="card-img-top " alt="... "/>
                                <div className="card-body d-flex justify-content-between text-muted">
                                    <p className="card-text mb-0">IPhone 12 Pro Max</p>
                                    <p className="card-text mb-0">$800</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card border-0 shadow-lg p-3 bg-body">
                                <img srcSet="https://i.ibb.co/ZTs6Hyp/R5ghkk2-SBc6-VKYzntuox-SB-768-80.jpg" width="200" height="350" className="card-img-top " alt="... "/>
                                <div className="card-body d-flex justify-content-between text-muted">
                                    <p className="card-text mb-0">IPhone 12 Pro</p>
                                    <p className="card-text mb-0">$1099</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="blank d-none d-md-block"  style={{height:"50px"}}></div>
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
        <section className="container subscribe-section bg-light-pink">
            <div className="row">
                <h2 className="subscribe-header text-center fs-1 text-royel-blue mb-5">Subscribe to get information, latest news and other interesting offers about Cobham</h2>
                <div className="submit-section text-center">
                    <input type="email" placeholder="Your Email" className="px-4 py-3 border rounded-3 me-3 mb-3" cols="20" style={{width: "50%"}}/>
                    <button className="btn bg-pink border-0  px-4 py-3 rounded-3" type="submit">Subscribe</button>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Home;