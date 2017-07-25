
import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import {Link} from 'react-router-dom';

class Message extends Component{
    render(){
        return(
            <div className="message">
                <div className="gjl_header">
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"> </div>
                    </Link>
                    <div className="title">
                        <span className="list-1"><i></i><i></i><i></i></span><h1>通知</h1><span className="list-2"><i></i><i></i><i></i></span>
                    </div>
                </div>
                <div className="message-nav">
                    <div className="nav-empty"></div>
                    <div className="message-lis">
                        <div className="message-wrap">
                            <div className="message-item"></div>
                            <div className="message-icon-wrap">
                                <div className="icon-wrap icon-laud"></div>
                            </div>
                            <div className="message-content">
                                <div className="message-title">
                                    <h3>新品推荐</h3><span>2016/3/12</span>
                                </div>
                                <div className="message-con-describe">
                                   <p>
                                       车品区又上新啦，全场新品9折，购买还送洗车优惠劵，先到先得！
                                   </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-lis">
                        <div className="message-wrap">
                            <div className="message-item"></div>
                            <div className="message-icon-wrap">
                                <div className="icon-wrap"></div>
                            </div>
                            <div className="message-content">
                                <div className="message-title">
                                    <h3>积分抵用券</h3><span>2016/3/12</span>
                                </div>
                                <div className="message-con-describe">
                                    <p>
                                        恭喜您获得10元洗车优惠券，已放入您的账户 关注微信“车先生”领取更多福利 拷贝
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-lis">
                        <div className="message-wrap">
                            <div className="message-item"></div>
                            <div className="message-icon-wrap">
                                <div className="icon-wrap"></div>
                            </div>
                            <div className="message-content">
                                <div className="message-title">
                                    <h3>朝阳洗车</h3><span>2016/3/12</span>
                                </div>
                                <div className="message-con-describe">
                                    <p>
                                        您的订单已经完成，点击查看详情
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="message-lis">
                        <div className="message-wrap">
                            <div className="message-item"></div>
                            <div className="message-icon-wrap">
                                <div className="icon-wrap"></div>
                            </div>
                            <div className="message-content">
                                <div className="message-title">
                                    <h3>靓车堂</h3><span>2016/3/12</span>
                                </div>
                                <div className="message-con-describe">
                                    <p>
                                        您的订单已经完成，点击查看详情
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Message;