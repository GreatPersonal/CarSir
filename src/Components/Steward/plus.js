import React, { Component } from 'react';
import Header from './header';
import Map from './map'
import Plusmain from './plusmain';
import Zhezhao from './zhezhao';

class Plus extends Component{
    render(){
        return(
            <div className="plus">
                <Zhezhao/>
                <Header title={'靓车堂(平阳路店)'} left={'icon-arrow'} right={'icon-shoppingcar'}/>
                <Map/>
                <Plusmain/>
            </div>
        )
    }
}
export default Plus;