import React from 'react';
import mobile from './network-3291853_1280.png'

const Header = () => {
    return (
   <section>
       <div className="row">
           <div className="col-md-6">
           <div>
                        <h1>Fix your device </h1>

                        <p className="text-secondary pb-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel dicta incidunt impedit amet repudiandae.</p>
                       
                            <button className="btn btn-danger"> service </button>
                      

                    </div>

           </div>
           <div className="col-md-6">
           <img style={{ width: '80%' }} src={mobile} alt="" className="img-fluid" />
           </div>
       </div>
   </section>
    );
};

export default Header;