import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
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
                           <button className="btn bg-pink px-5 py-2 mt-2" type="submit">Send</button>
                        </form>
                    </div>
                        
                </div>
            </div>
        </div>
    );
};

export default Review;