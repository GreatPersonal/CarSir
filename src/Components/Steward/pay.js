import React, { Component } from 'react';
import Header from './header';
import Paymain from './paymain';
class Pay extends Component{
    render(){
        return(
            <div className="dy-pay">
                <Header title={'订单支付'} left={'icon-arrow'} right={''}/>
                <Paymain/>
            </div>
        )
    }
}
export default Pay;
