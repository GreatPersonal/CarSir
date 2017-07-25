import React, { Component } from 'react';
// 引入样式
import {Link} from 'react-router-dom';
import './Css/rlm_floor.css';

class Footer extends Component{
    render(){
        return(
            <div className="rlm-footer">
                        <Link  to="/" className="rlm-footer-index">
                            <i className="icon-home"></i>
                            <span>首页</span>
                        </Link>
                        <Link to="/steward" className="rlm-footer-steward">
                            <i className="icon-comments"></i>
                            <span>车管家</span>
                        </Link>
                        <Link to="/frined" className="rlm-footer-frined">
                            <i className="icon-friends"></i>
                            <span>车友汇</span>
                        </Link>
                        <Link to="/personal" className="rlm-footer-personal">
                            <i className="icon-person"></i>
                            <span>我的</span>
                        </Link>
                    </div>
        )
    }
}

export default Footer;