import React, { Component } from 'react';
import './css/dy-steward.css';
import Header from './header';
import Headerbg from './headerbg';
import Nav from './nav';
import Abussinese from './abussinese';
import Business from './business';
import Footer from '../../Components/Common/footer';
class Steward extends Component{
    render(){
        return(
            <div className="dy-steward">
                <Header title={'车管家'} left={'icon-list'} right={'icon-search'}/>
                <Headerbg/>
                <Nav/>
                <Business/>
                <Abussinese/>
                <Footer/>
            </div>
        )
    }
}

export default Steward;