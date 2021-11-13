import React from 'react';

const ShowReview = (props) => {
    const {email,comment,rating} = props?.data;

    const userName = email.split("@");
    const name = userName[0];
    return (
        <div className="border-bottom border-danger mb-4">
            <h5 className="text-danger"> <img src="https://i.ibb.co/Z8gDRXm/mfp-right.png" alt="" /> {name}</h5>
            <p><small>{comment}</small></p>
            <div>{ [...Array(rating)].map(e => <small><i className="fas fa-star fs-5 text-pink"></i></small> ) } <b className="ms-2">{rating}</b>/5</div>
        </div>
    );
};

export default ShowReview;