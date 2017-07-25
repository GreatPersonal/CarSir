import React, { Component } from 'react';
import Header from './header';
import Headerbg from './headerbg';
import Content from './content';
import Maskorder from './maskorder';
class Order extends Component{
    render(){
        return(
            <div className="dy-order">
                <Header title={'订单详情'} left={'icon-arrow'} right={''}/>
                <Headerbg/>
                <Content/>
                <Maskorder/>
            </div>
        )
    }
}
export default Order;