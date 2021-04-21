import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navabar/Navbar';

const AddService = () => {


    const { register, handleSubmit, watch, errors } = useForm();
    // const [loggedInUser, setLoggedInUser] = useContext(useFormContext)

    const [imgUrl, setImgURL] = useState(null)

    const onSubmit = data => {

        const eventData = {
            name: data.name,
            price: data.price,
            img:imgUrl
          
        };
        const url = `http://localhost:5002/addService`

        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side responded', res))
    }

    const handleImgUpload = event => {

        console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', 'b609f6269bd0676a18b28cbe53d5634a')

        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="container">
                <Navbar></Navbar>
        <div className="row">
            <div className="col-md-5">
                <div className="row">
                    <div class="text-center">
                        <div>


                            <Link to="/bookingList">
                                <button class="btn btn-primary mb-3" type="submit">Booking list</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div class="text-center">
                        <div>

                            <Link to="/admin">
                                <button class="btn btn-secondary mb-3" type="submit">Add Service</button>
                            </Link>
                        </div>
                    </div>
                </div>

            

            </div>

            <div className="col-md-7">
                <div className="row ">

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="col-md-6">

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Service Name</label>
                               
                                <input name="name" class="form-control" placeholder="Service name" defaultValue="" ref={register}></input>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Price</label>
                                <input name="price" class="form-control" placeholder="price" ref={register} />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div class="mb-3">

                                <label for="formFile" class="form-label">Upload Image</label>
                               
                                <input name="exampleRequired" class="form-control" type="file" onChange={handleImgUpload} />

                            </div>
                            <input type="submit" class="btn btn-primary mb-5" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddService;