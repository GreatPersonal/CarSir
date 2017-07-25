import React, { Component } from 'react';
import './Css/header.css';
import {Link} from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <div className="hyf-header container" id="hyf-header" >
                <a className="hyf-header-left"  onClick={(e)=>{e.stopPropagation();if(this.props.left!== 'icon-pointer')(window.history.back())}}><i className={this.props.left}></i></a>
                <div className="hyf-header-center">
                    <span className="hyf-center-left"><i></i><i></i><i></i></span>
                    <span className="hyf-center-center">{this.props.title}</span>
                    <span className="hyf-center-right"><i></i><i></i><i></i></span>
                </div>
                <Link className="hyf-header-left" to={this.props.href? this.props.href : '/'}><i className={this.props.right}></i></Link>
            </div>
        )
    }
}

export default Header;