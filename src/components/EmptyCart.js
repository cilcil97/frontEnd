import React, { Component} from 'react';
import {BackButton} from "./BackButton";
import {Link} from "react-router-dom";

class EmptyCart extends Component{
    render(){
        return(
            <div className="col-10 mx-auto text-center">
                <h1>Вашата корпа е празна</h1>
                <Link to="/">
                    <BackButton>
                        Назад кон продукти
                    </BackButton>
                </Link>
            </div>
        )
    }
}
export default EmptyCart;