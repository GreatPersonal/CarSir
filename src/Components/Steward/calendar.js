import React, { Component } from 'react';
import Header from './header';
import Map from './map'
import Plusmain from './plusmain';
import Mask from './mask';
class Calendar extends Component{
    render(){
        return(
            <div className="calendar">
                <Mask/>
                <Header title={'靓车堂(平阳路店)'} left={'icon-arrow'} right={'icon-shoppingcar'}/>
                <Map/>
                <Plusmain/>
            </div>
        )
    }

}
export default Calendar;

