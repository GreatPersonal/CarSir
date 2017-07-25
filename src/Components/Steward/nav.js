import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component{
    render(){
        return(
            <div className="dy-nav-wrap">
                <div className="dy-nav-btn-wrap container">
                    <Link to="/general" className="dy-nav-btn-item">
                        <i></i>
                        <span>综合排行</span>
                    </Link>
                    <a href="#" className="dy-nav-btn-item">
                        <i></i>
                        <span>评分最高</span>
                    </a>
                    <a href="#" className="dy-nav-btn-item">
                        <i></i>
                        <span>车新手</span>
                    </a>
                    <a href="#" className="dy-nav-btn-item">
                        <i></i>
                        <span>车社区</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;

