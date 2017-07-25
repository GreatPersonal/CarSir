import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Maskyhq extends Component{
    render(){
        return(
            <div className="dy-maskyhq">
                <Link to="/pay" className="dy-maskpay-yhq"></Link>
            </div>
        )
    }
}
export default Maskyhq;