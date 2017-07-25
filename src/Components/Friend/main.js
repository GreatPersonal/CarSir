import React, { Component } from 'react';
import Record from './record';
import Edit from '../Common/edit';
import {Link} from 'react-router-dom';
class Main extends Component{
    render(){
        return(
            <div className="rlm-main-wrap">
                <div className="rlm-main-banner-wrap">
                    <div className="rlm-main-banner-text container">
                        <p>手机里的初春</p>
                        <p>MOBILE PHONE IN <span>SRRING</span></p>
                    </div>
                </div>
                <div className="rlm-main-btn-wrap container">
                    <Link to="/general?xqid=1" className="rlm-main-btn-item">
                        <i></i>
                        <span>车常识</span>
                    </Link>
                    <Link to="/general?xqid=2" href="#" className="rlm-main-btn-item">
                        <i></i>
                        <span>车社区</span>
                    </Link>
                    <Link to="/general?xqid=3" href="#" className="rlm-main-btn-item">
                        <i></i>
                        <span>车新手</span>
                    </Link>
                    <Link to="/general?xqid=4" href="#" className="rlm-main-btn-item">
                        <i></i>
                        <span>先生志</span>
                    </Link>
                </div>
                <Record/>
                <Edit/>
            </div>
        )
    }
}

export default Main;
