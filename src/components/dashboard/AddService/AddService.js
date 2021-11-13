import axios from 'axios';
import React, { useRef, useState } from 'react';

const AddService = () => {
    const titleRef = useRef("");
    const descriptionRef = useRef("");
    const priceRef = useRef("");
    const ratingRef = useRef("");
    const peopleRef = useRef("");
    const imageRef = useRef("");

    const [isLoading, setLoading] = useState();

    const handleForm = (e) => {
        setLoading(true);
        e.preventDefault();

        const name = titleRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const rating = ratingRef.current.value;
        const people = peopleRef.current.value;
        const picture = imageRef.current.value;

        const serviceInfo = {
            name,description,price,picture,rating,people
        }

        // Add services
        axios.post(`https://secret-tor-67063.herokuapp.com/products`,{serviceInfo})
            .then(res => {
                if(res){
                    e.target.reset();
                    setLoading(false);
                }
            }) 
    }
    return (
        <div className="row">
            <div className="col">
                <h5 className="card-header text-center display-4 bg-light-pink">ADD A SERVICE</h5>
                <div style={{width:"100%"}} className="row row-cols-1 gy-4 mt-2 mb-5 mx-auto">
                    <form onSubmit={handleForm} className="border border-pink p-5">
                        <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">Name</label>
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

                        <button type="submit" className="btn bg-pink">Submit</button>
                        {
                        isLoading && <p className="text-center float-end">
                            <div className="spinner-border text-pink p-4" role="status"><span class="visually-hidden">Loading...</span></div>
                        </p>
                    }
                    </form>
                    {
                        isLoading && <div className="text-center my-5">
                        <div className="spinner-border text-pink p-4" role="status"><span className="visually-hidden">Loading...</span></div>
                        </div>
                       
                    }   
                </div>
                <div className="row text-center">
                    <h5 className="text-danger">You can use This images URL</h5>
                    <p>https://i.ibb.co/ZTs6Hyp/R5ghkk2-SBc6-VKYzntuox-SB-768-80.jpg</p>
                    <p>https://i.ibb.co/Lkh3whJ/images-22.jpg</p>
                    <p>https://i.ibb.co/t4n3xcD/images-23.jpg</p>
                    <p>https://i.ibb.co/GdRWh6f/iphone-13-f-e1631703251417-1024x552.jpg</p>
                </div>

                </div>
            </div>

    );
};

export default AddService;

