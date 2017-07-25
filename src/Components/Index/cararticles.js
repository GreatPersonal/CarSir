import React, {Component} from 'react';
import Header from './header';
import './Css/header.css';
import './Css/index.css';
import {Link} from 'react-router-dom';

/*--------------车先生-----------------*/
class Cararticles extends Component {
    render(){
        return(
            <div className="hyf-cararticles">
                <Header left="icon-arrow" title="车先生" right="icon-search"/>
                <div className="hyf-Cararbanner">
                    <div className="border"></div>
                </div>
                <div className="hyf-carart-main container">
                    <ul className="hyf-carart-list">
                        <Link to="/parts"><li className="hyf-carart-item hyf-carart-item1"> </li></Link>
                        <Link to="/parts"><li className="hyf-carart-item hyf-carart-item2"> </li></Link>
                        <Link to="/parts"><li className="hyf-carart-item hyf-carart-item3"> </li></Link>
                        <Link to="/parts"><li className="hyf-carart-item hyf-carart-item4"> </li></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cararticles;