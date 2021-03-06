import React, { Component} from 'react';
import Title from "./Title";
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import {ProductConsumer} from "../context";
import CartList from "./CartList"

class Cart extends Component{
    render(){
        return(
            <section className="container py-4">
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0){
                            return(
                                <React.Fragment>
                                    <Title title="Ваши Ставки"/>
                                    <CartColumns/>
                                    <hr/>
                                    <CartList value={value}/>
                                </React.Fragment>
                            );
                        }else {
                            return(
                              <EmptyCart/>
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
export default Cart;