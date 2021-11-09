import axios from 'axios';
import React, { useRef } from 'react';

const AddService = () => {
    const titleRef = useRef("");
    const descriptionRef = useRef("");
    const priceRef = useRef("");
    const ratingRef = useRef("");
    const peopleRef = useRef("");
    const imageRef = useRef("");

    const handleForm = (e) => {
        e.preventDefault();

        const name = titleRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const duration = "1";
        const rating = ratingRef.current.value;
        const people = peopleRef.current.value;
        const picture = imageRef.current.value;

        const serviceInfo = {
            name,description,price,picture,duration,rating,people
        }

        // Add services
        axios.post(`https://damp-cliffs-56350.herokuapp.com/services`,{serviceInfo})
            .then(res => {
                e.target.reset();
                console.log(res.data)
            })
        
    }
    return (
        <div className="container">
            <div className="row p-md-5">
                <h2 className="text-white py-4 mt-3 mt-lg-5 display-3 bg-dark text-center">ADD SERVICE</h2>
                <form onSubmit={handleForm} className="border border-warning p-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Place</label>
                        <input ref={titleRef} type="text" className="form-control" id="exampleInputText1" aria-describedby="Text1Help" required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputDesc" className="form-label">Description</label>
                        <textarea  ref={descriptionRef} name="" id="" rows="10" className="w-100 border border-muted rounded" required></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputText2" className="form-label">Price</label>
                        <input  ref={priceRef} type="text" className="form-control"  placeholder="$" id="exampleInputText2" aria-describedby="Text2Help" required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Rating</label>
                        <input  ref={ratingRef} type="text" className="form-control" placeholder="Out of 5" id="exampleInputPassword1" required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputText3" className="form-label">People count</label>
                        <input  ref={peopleRef} type="text" className="form-control" id="exampleInputText3" aria-describedby="Text3Help" required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputFile" className="form-label">Image</label>
                        <input ref={imageRef} type="text" placeholder="Image URL" className="form-control" id="exampleInputFile" aria-describedby="FileHelp" required/>
                    </div>

                    <button type="submit" className="btn btn-warning">Submit</button>
                </form>
            </div>
            <div className="row text-center">
                <h5 className="text-danger">You can use This images URL</h5>
                <p>https://i.ibb.co/YDpjwvb/28-10-2021-23-43-52-REC.png</p>
                <p>https://i.ibb.co/3fSrzVz/28-10-2021-23-44-37-REC.png</p>
                <p>https://i.ibb.co/F71HXCQ/28-10-2021-23-44-21-REC.png</p>
                <p>https://i.ibb.co/XsFRph4/download-10.jpg</p>
            </div>
        </div>
    );
};

export default AddService;