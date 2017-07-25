
import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import Footer from  './footer';
import {Switch} from 'antd';
import {Link} from 'react-router-dom';

class Account extends Component{
    render(){
        return(
            <div className="newmessage">
                <div className="gjl_header">
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"></div><span className="set-title">设置</span>
                    </Link>
                    <div className="title">
                       <h1>新消息通知</h1>
                    </div>
                </div>
                <div className="nav-empty"></div>
                <div className="header-bg-empty"></div>
                <div className="account-nav">
                    <div className="act-safe-wrap">
                        <div className="account-safe">
                            <div className="account-title">
                                <h2>接受新消息通知</h2>
                            </div>
                            <div className="icon-protect">
                                <div className="protect"><span>已开启</span></div>
                            </div>
                            <div className="icons-wrap icon-arrow"></div>
                        </div>
                    </div>
                        <div className="account-safe">
                            <div className="account-title">
                                <h2>功能消息免打扰</h2>
                            </div>
                            <div className="switch">
                                <Switch/>
                            </div>
                        </div>
                    <div className="help-about-wrap">
                        <div className="help-about">
                            <div className="help">
                                <div className="help-wrap voice">
                                    <h2>声音</h2>
                                    <div className="switch">
                                        <Switch/>
                                    </div>
                                </div>


                            </div>
                            <div className="about">
                                <div className="about-wrap shake">
                                    <h2>振动</h2>
                                    <div className="switch">
                                        <Switch/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Account;
