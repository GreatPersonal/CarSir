import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Mymessage extends Component{
    render(){
        return(
            <div className="myfriend">
                <div className="gjl_header">
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"> </div>
                    </Link>
                    <div className="title">
                        <span className="list-1"><i></i><i></i><i></i></span><h1>好友</h1><span className="list-2"><i></i><i></i><i></i></span>
                    </div>
                </div>
                <div className="friend-tab">
                    <Link to="/personal/myfriend" className="friend-link">
                        <div className="f-tab friend-message ">
                            <div className="f-wrap">
                                <div className="friend-icon icon-message"></div>
                                <div className="f-tab-right"><h3>消息</h3><span>MESSAGE</span></div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/personal/mymessage" className="friend-link">
                        <div className="f-tab friends adtive">
                            <div className="f-wrap">
                                <div className="friend-icon icon-person"></div>
                                <div className="f-tab-right"><h3>好友</h3><span>FRIENDS</span></div>
                            </div>
                        </div>
                    </Link>
                </div>

                <ul className="friend-nav">
                    <li>
                        <div className="con-show icon-friends">
                        </div>
                        <div className="con-content newfriends">
                           <h2>新的朋友</h2>
                        </div>
                    </li>

                </ul>
                <ul className="friend-nav friend-message-nav">
                    B
                    <li>
                        <div className="con-show white-header">
                            <div className="con-show01">
                                <div className="con-show02">
                                    <div className="con-show03 bg01">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-content con-white">
                            <div className="show-title"><h3>白子画</h3><div className="linkurl">[ <i className="icon-text"></i> 通讯录好友]</div></div>
                            <div className="show-con"><p>窗含西岭千秋雪，门泊东吴万里船...</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="con-show">
                            <div className="con-show01">
                                <div className="con-show02">
                                    <div className="con-show03 bg01">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-content">
                            <div className="show-title"><h3>四十大盗</h3><div className="linkurl">[ <i className="icon-text"></i> 通讯录好友]</div></div>
                            <div className="show-con"><p>窗含西岭千秋雪，门泊东吴万里船...</p></div>
                        </div>
                    </li>
                </ul>

                <ul className="friend-nav friend-message-nav">
                    S
                    <li>
                        <div className="con-show white-header">
                            <div className="con-show01">
                                <div className="con-show02">
                                    <div className="con-show03 bg01">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-content con-white">
                            <div className="show-title"><h3>深蓝深蓝</h3><div className="linkurl">[ <i className="icon-text"></i> 通讯录好友]</div></div>
                            <div className="show-con"><p>窗含西岭千秋雪，门泊东吴万里船...</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="con-show white-header">
                            <div className="con-show01">
                                <div className="con-show02">
                                    <div className="con-show03 bg01">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-content con-white">
                            <div className="show-title"><h3>纱啊纱</h3></div>
                            <div className="show-con"><p>窗含西岭千秋雪，门泊东吴万里船...</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="con-show white-header">
                            <div className="con-show01">
                                <div className="con-show02">
                                    <div className="con-show03 bg01">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-content con-white">
                            <div className="show-title"><h3>涉世未深</h3><div className="linkurl">[ <i className="icon-text"></i> 通讯录好友]</div></div>
                            <div className="show-con"><p>窗含西岭千秋雪，门泊东吴万里船...</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="con-show white-header">
                            <div className="con-show01">
                                <div className="con-show02">
                                    <div className="con-show03 bg01">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-content con-white">
                            <div className="show-title"><h3>NANA</h3></div>
                            <div className="show-con"><p>窗含西岭千秋雪，门泊东吴万里船...</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="con-show">
                            <div className="con-show01">
                                <div className="con-show02">
                                    <div className="con-show03 bg01">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="con-content">
                            <div className="show-title"><h3>百事可乐</h3><div className="linkurl">[ <i className="icon-text"></i> 通讯录好友]</div></div>
                            <div className="show-con"><p>窗含西岭千秋雪，门泊东吴万里船...</p></div>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}
export default Mymessage;