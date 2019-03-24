import React, { Component } from 'react'
import {storeProducts} from "./data";
import {detailProduct} from "./data";
import * as apiCalls from  "./dataFromDatabase";
const ProductContext = React.createContext();


class ProductProvider extends Component{
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: []
    };

    componentDidMount() {
        this.setProducts();
    }

    // setProducts = () => {
    //     let tempProducts = [];
    //     storeProducts.forEach(item => {
    //        const singleItem = {...item};
    //        tempProducts = [...tempProducts, singleItem];
    //     });
    //     this.setState(() => {
    //         return {products: tempProducts}
    //     });
    // };

    setProducts = () => {
        apiCalls.StoreProductsFromDatabase()
            .then((data)=>{
                console.log('data: ',data);
                this.setState({products:data})
            });
    };

    getItem = id => {
      const product = this.state.products.find(item => item.id === id);
      return product;
    };

    handleDetail = id => {
      const product = this.getItem(id);
      this.setState(() => {
         return { detailProduct: product };
      });
    };

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        this.setState(() => {
           return {product: tempProducts, cart: [...this.state.cart, product]};
        });
    };

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;

        this.setState(() => {
                return{
                    cart: [...tempCart],
                    product: [...tempProducts]
                };
            }
        )
    };

    render(){
        return(
          <ProductContext.Provider value={{
              ...this.state,
              handleDetail:this.handleDetail,
              addToCart: this.addToCart,
              removeItem: this.removeItem
          }}>
              {this.props.children}
          </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
