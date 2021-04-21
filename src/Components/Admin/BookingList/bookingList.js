import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navabar/Navbar';
import BookingListCard from '../BookingListCard/BookingListCard';

const bookingList = () => {

    const [orderDetails, setOrderDetails] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5002/orderDetails')
            .then(res => res.json())
            .then(data => setOrderDetails(data))

    }, [])


    return (
          <div className="container">
      <Navbar></Navbar>

            <div className="container text-center mt-5 pt-5 mb-5">
                <h1> <span style={{ color: 'red' }}> {loggedInUser.name}</span> , Your Total order: {orderDetails.length} </h1>
            </div>

            {
                orderDetails.map(orderDetail => <BookingListCard orderD={orderDetail}></BookingListCard>)
            }

            <div className="text-center">
              
                    <button class="btn btn-danger  mb-5" >Confirm Order</button>
              
            </div>

        </div>
    );
};

export default bookingList;