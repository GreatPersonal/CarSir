
import React,{Component} from 'react';
import Footer from  './footer';
import {Link} from 'react-router-dom';

class Account extends Component{
    render(){
        return(
            <div className="accounts">
                <div className="gjl_header">
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"> </div>
                    </Link>
                    <div className="title">
                        <span className="list-1"><i></i><i></i><i></i></span><h1>我的帐号</h1><span className="list-2"><i></i><i></i><i></i></span>
                    </div>
                </div>
                <div className="nav-empty"></div>
                <div className="header-bg-empty"></div>
                <div className="account-nav">

                    <div className="act-safe-wrap">
                        <div className="account-safe">
                            <div className="account-title">
                                <h2>账号与安全</h2>
                            </div>
                            <div className="icon">
                                <div className="wrap icon-lock"></div>
                            </div>
                            <div className="protect"><span>已保护</span></div>
                        </div>
                    </div>
                    <div className="account-set">
                        <div className="new-message">
                            <div className="wrap">
                                <div className="message-wrap">
                                    <h2>新消息通知</h2>
                                </div>
                                <div className="arrow icon-arrow"></div>
                            </div>
                        </div>
                        <div className="privacy">
                            <div className="privacy-wrap">
                                <h2>隐私</h2>
                            </div>
                        </div>
                        <div className="common">
                            <div className="common-wrap">
                                <h2>通用</h2>
                            </div>
                        </div>
                    </div>
                    <div className="help-about-wrap">
                        <div className="help-about">
                            <div className="help">
                                <div className="help-wrap">
                                    <h2>帮助与反馈</h2>
                                </div>
                            </div>
                            <div className="about">
                                <div className="about-wrap">
                                    <h2>关于车先生</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="change-account">
                        <div className="change-title">
                            <h1>更换账号</h1>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Account;