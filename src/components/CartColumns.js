import React from 'react';

function CartColumns(){
        return(
           <div className="container-fluid text-center d-none d-lg-block">
               <div className="row my-3">
                   <div className="col-10 mx-auto col-lg-2">
                       <p className="text-uppercase">Продукт</p>
                   </div>
                   <div className="col-10 mx-auto col-lg-3">
                       <p className="text-uppercase">Име на продукт</p>
                   </div>
                   <div className="col-10 mx-auto col-lg-2">
                       <p className="text-uppercase">Цена</p>
                   </div>
                   <div className="col-10 mx-auto col-lg-2">
                       <p className="text-uppercase">Почеток</p>
                   </div>
                   <div className="col-10 mx-auto col-lg-2">
                       <p className="text-uppercase">Избриши</p>
                   </div>
               </div>
           </div>
        )
}
export default CartColumns;