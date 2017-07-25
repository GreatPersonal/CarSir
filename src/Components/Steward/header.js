import React, { Component } from 'react';
class Header extends Component{
    render(){
        return(
        <div className="dy-header container">
              <a className="dy-header-left"onClick={(e)=>{e.stopPropagation();history.back();}}><i className={this.props.left}></i></a>
              <div className="dy-header-center">
                    <span className="dy-center-left"><i></i><i></i><i></i></span>
                    <span className="dy-center-center">{this.props.title}</span>
                    <span className="dy-center-right"><i></i><i></i><i></i></span>
              </div>
              <a className="dy-header-left"><i className={this.props.right}></i></a>
        </div>
        )
    }
}

export default Header;
