import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from "../context";

class Product extends Component{
    render(){
        const { product_id, title, img,start_price,startAuction} = this.props.product;
        var startDate,startTime;
        let getDateAndTime =()=> {
            console.log({startAuction});
            let year=startAuction.slice(0,4);
            let month=startAuction.slice(5,7);
            let day=startAuction.slice(8,10);
            startTime=startAuction.slice(11,16);
            startDate=day+"\."+month+"\."+year;
        };
        getDateAndTime();
        return(
            <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (<div className="img-container p-5" onClick={ () => value.handleDetail(product_id)}>
                            <Link to="/details">
                                <img src={img} alt="product_img" className="card-img-top"/>
                            </Link>
                        </div>)}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <h5 className="align-self-center mb-0">{title}</h5>

                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <h6 className="mb-2">
                            <span>Почетна цена&nbsp;</span>
                            {start_price}&nbsp;
                            <span>ден</span>
                        </h6>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <strong><span>Датум: </span>{startDate}</strong>
                        <strong><span>Време: </span>{startTime}</strong>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
  .card{
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.5 linear;
  }
  &:hover{
    .card{
      border: 0.05rem solid #C0C0C0;
    }
  }
  .img-container{
    position: relative;
    overflow: hidden;
  }
  .card-img-top{
    transition: all 0.4s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }
`;

export default Product;

