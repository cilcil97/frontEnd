import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from "../context";
import * as apiCalls from "../dataFromDatabase";
class ProductList extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="py-4">
                   <div className="container">
                       <Title title="Џенерик Тајтл"/>
                       <div className="row">
                           <ProductConsumer>
                               {value => {
                                   return value.products.map(product => {
                                       return <Product key={product.product_id} product={product}/>
                                   })
                               }}
                           </ProductConsumer>
                       </div>
                   </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ProductList;