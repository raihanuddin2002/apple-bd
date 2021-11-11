import React, { useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const Review = () => {
    const [isLoading, setLoading] = useState(false);
    const rateRef = useRef('0');
    const commentRef = useRef('');

    const {user} = useAuth();

    const handleForm = (e) => {
        e.preventDefault();
        const rate = parseFloat(rateRef.current.value);
        const comment = commentRef.current.value;

        const review = {
            name: user?.displayName,rating: rate, comment: comment
        }
        setLoading(true);
        axios.post('https://secret-tor-67063.herokuapp.com/reviews',{review}).then(res => {
            if(res){
                setLoading(false);
                console.log("Review Inserted");
            }
        });

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col pe-lg-0 scroll-div">
                        <h5 className="card-header text-center display-4 bg-light-pink mb-3">REVIEW</h5>
                        <form onSubmit={handleForm} className="border-pink p-2 p-md-5">
                            <label htmlFor="" className="mb-2 fw-bold">Rate Services</label>
                            <input ref={rateRef} type="text"  className="w-100 mb-3 py-2" placeholder=" Out of 5" required/>

                            <label htmlFor="" className="mb-2 fw-bold">Comments</label>
                            <textarea ref={commentRef} className="w-100" name="" id="" rows="10" placeholder=" Write Comment.." required></textarea>
                            <div className="d-flex justify-content-between">
                                <button className="btn bg-pink px-5 py-2 mt-2" type="submit">Send</button>
                                {
                                    isLoading && <div className="text-end">
                                        <div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Review;