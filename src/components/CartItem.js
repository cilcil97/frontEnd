import React from 'react';

function CartItem({item, value}){

    const {id, title, img, price, startDate, startTime} = item;
    const {removeItem} = value;
        return(
              <div className="row my-1 text-center text-capitalize">
                  <div className="col-10 mx-auto col-lg-2">
                      <img src={img} style={{width: "5rem", height: "5rem"}} className="img-fluid" alt="img-product-2"/>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <strong>{title}</strong>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <strong>{price}<span>ден</span></strong>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                      <strong>{startDate}</strong>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                    <button className="mb-2" onClick={() => removeItem(id)}>Бриши</button><br/>
                  </div>
              </div>
        );
}

export default CartItem