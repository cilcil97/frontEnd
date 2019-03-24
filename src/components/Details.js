import React, { Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Title from "./Title";
import {BackButton} from './BackButton';

class Details extends Component{
    render(){
        return(
           <ProductConsumer>
               {(value) => {
                   const {id, company, img, info, price, title, inCart} = value.detailProduct;
                   return(
                     <div className="py-4">
                         <div className="container">
                             <Title title="Џенерик Тајтл"/>
                             <div className="row">
                                 <div className="col-10 mx-auto col-md-6 my-5">
                                     <img src={img} className="img-fluid" alt="img-details"/>
                                 </div>
                                 <div className="col-10 mx-auto col-md-6 my-5">
                                     <h1>{title}</h1>
                                     <h3>Производител: {company}</h3>
                                     <p className="text-justify">{info}</p>
                                     <h2>Цена: {price}<span>ден</span></h2>
                                     <Link to="/" className="btn-info">
                                         <BackButton>
                                             назад кон продукти
                                         </BackButton>
                                     </Link>
                                     <AddToCartButton disabled={inCart ? true : false}
                                     onClick={() => {
                                         value.addToCart(id)
                                     }}>
                                         {inCart ? "успешно додадено " : "додади во корпа"}
                                     </AddToCartButton>
                                 </div>
                             </div>
                         </div>
                     </div>
                   );
               }}
           </ProductConsumer>
        );
    }
}
export default Details;

const AddToCartButton = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    color: var(--mainWhite) !important;
    background: #87CEEB;
    border: 0.05rem solid #B0E0E6;
    border-radius: 0.5rem;
    padding: 0.2rem 0.4rem;
    position: relative;
    left: 4px;
    margin: 0.2 0.4 0.2 0;
    transition: all 0.3s ease-in-out;
    &:hover{
     background: #B0E0E6;
    }
    
`;