import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import {Link} from 'react-router-dom';

class Order extends Component{
    render(){
        return(
            <div className="order">
                <div className="gjl_header">
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"></div>
                    </Link>
                    <div className="title">
                        <span className="list-1"><i></i><i></i><i></i></span><h1>订单列表</h1><span className="list-2"><i></i><i></i><i></i></span>
                    </div>
                    <Link to="/personal/account" className="set">
                        <div className="setting icon-edit"> </div>
                    </Link>
                </div>
                <div className="nav-empty"></div>

                <div className="order-nav">
                    <div className="order-tab">

                        <div className="tab-left">
                            <Link to="/personal/order">
                                <div className="tab-wrap active">
                                    <div className="wrap-wrap"><h3>全部订单</h3></div>
                                </div>
                            </Link>
                        </div>
                        <div className="tab-right">
                            <Link to="/personal/evaluate">
                                <div className="tab-wrap ">
                                    <div className="wrap-wrap"><h3>评价</h3></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="order-content">
                        <ul className="order-con-wrap">
                            <li>
                                <div className="order-con-lis">
                                    <div className="lis-left">
                                        <div className="order-header"></div>
                                    </div>
                                    <div className="lis-right">
                                        <div className="right-top">
                                            <div className="order-title">
                                                <h3>李嘉琦<i className="icon-arrow"></i></h3><span>订单完成</span>
                                            </div>
                                            <div className="pinyin">
                                                <h3>LI JIA QI</h3>
                                            </div>
                                        </div>
                                        <div className="right-bot">
                                            <div className="order-name">
                                                <span>金属汽车摆件（Metal decor）</span>
                                                <i>*3</i>
                                            </div>
                                            <div className="order-num">
                                                <span>共1件商品，实付</span><i>￥ 2399</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="order-con-lis">
                                    <div className="lis-left">
                                        <div className="order-header"></div>
                                    </div>
                                    <div className="lis-right">
                                        <div className="right-top">
                                            <div className="order-title">
                                                <h3>李嘉琦<i className="icon-arrow"></i></h3><span>订单完成</span>
                                            </div>
                                            <div className="pinyin">
                                                <h3>LI JIA QI</h3>
                                            </div>
                                        </div>
                                        <div className="right-bot">
                                            <div className="order-name">
                                                <span>金属汽车摆件（Metal decor）</span>
                                                <i>*3</i>
                                            </div>
                                            <div className="order-num">
                                                <span>共1件商品，实付</span><i>￥ 2399</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="order-con-lis">
                                    <div className="lis-left">
                                        <div className="order-header"></div>
                                    </div>
                                    <div className="lis-right">
                                        <div className="right-top">
                                            <div className="order-title">
                                                <h3>李嘉琦<i className="icon-arrow"></i></h3><span>订单完成</span>
                                            </div>
                                            <div className="pinyin">
                                                <h3>LI JIA QI</h3>
                                            </div>
                                        </div>
                                        <div className="right-bot">
                                            <div className="order-name">
                                                <span>金属汽车摆件（Metal decor）</span>
                                                <i>*3</i>
                                            </div>
                                            <div className="order-num">
                                                <span>共1件商品，实付</span><i>￥ 2399</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="gjl_footer">
                    <div className="logout">
                        <h2>再来一单</h2>
                    </div>
                    <div className="lis">
                        <i></i><span></span><i></i>
                    </div>
                    <div className="describe">
                        <span>ANTHOER ONE</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Order;