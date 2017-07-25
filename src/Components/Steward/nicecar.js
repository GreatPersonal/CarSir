import React, { Component } from 'react';
import Header from './header';
import Map from './map';
import Main from './main';

class Nicecar extends Component{
    render(){
        return(
            <div className="nicecar">
                <Header title={'靓车堂(平阳路店)'} left={'icon-arrow'} right={'icon-shoppingcar'}/>
                <Map/>
                <Main/>
            </div>
        )
    }
}
export default Nicecar;
