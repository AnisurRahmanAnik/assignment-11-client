import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navabar/Navbar';

const CheckOut = () => {
    let { serviceId } = useParams();

  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const [service, setService] = useState([])

  useEffect(() => {
    fetch('http://localhost:5002/service')
      .then(res => res.json())
      .then(data => setService(data))
  }, [])

  const OrderDetails = service.find(product => product._id == serviceId);
  console.log(OrderDetails)

  const { name, price, imgUrl } = OrderDetails || {}

  const handleOrder = () => {
    console.log('submit', OrderDetails)

    const orderDetails = { ...loggedInUser, Shipment: OrderDetails}

    fetch('http://localhost:5002/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('successful')
        }
      })
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

            <div className="col-md-4">

                <p>{name}</p>
                <p>{price}</p>
            
            <div className="m-0">
      
      <button className="btn btn-success mt-3 mb-3" onClick={() => handleOrder()}>Check out</button>


  </div>


            </div>
   </div>

        
    </div>
    );
};

export default CheckOut;