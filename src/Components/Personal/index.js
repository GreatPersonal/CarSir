import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import Header from './header';
import Footer from '../Common/footer';
import {Link} from 'react-router-dom';

class Index extends Component{
    render(){
        return(
           <div className="personal">
               <Header/>
               <div className="header-empty"></div>
               <div className="gjl_nav">
                   <div className="nav-empty" style={{background:'none'}}></div>
                   <div className="nav-header">
                       <div className="personal-title">
                       <h3>李嘉琦</h3>
                       <span>JIACHEN LI</span>
                       </div>
                       <div className="favicon">
                            <div className="favicon-circle">
                              <div className="log icon-edit">
                            </div>
                            </div>
                       </div>
                   </div>
                   <div className="containers">
                       <div className="containers-bg">
                        <div className="con-title">
                            <h2>甲壳虫</h2>
                            <span>DA ZHONG JIA KE CHONG</span>
                            <h3>晋A·8B728</h3>
                        </div>
                           <ul className="pff">
                               <Link to="/personal/dollar">
                               <li className="photograph">
                                   <div className="top">
                                     <h1>658</h1><h2>钱包</h2>
                                   </div>
                                   <div className="bottom">
                                       <span>photograph 789</span>
                                   </div>
                               </li>
                               </Link>
                               <Link to="/personal/myfriend">
                               <li className="following">
                                   <div className="top">
                                     <h1>02</h1><h2>我的好友</h2>
                                   </div>
                                   <div className="bottom">
                                       <span>following</span>
                                   </div>
                               </li>
                               </Link>
                               <Link to="/personal/commodity">
                               <li className="followers">
                                   <div className="top">
                                     <h1>96</h1><h2>收藏</h2>
                                   </div>
                                   <div className="bottom">
                                       <span>followers</span>
                                   </div>
                               </li>
                               </Link>
                           </ul>
                       </div>
                       <div className="con-nav">
                           <ul className="nav-column">
                               <Link to="/personal/message" style={{width:'100%'}}>
                                   <li>
                                       <div className="icon">
                                           <div className="icon-s icon-message"></div>
                                       </div>
                                       <div className="title">
                                           <h1>通知</h1><span>information</span>
                                       </div>
                                       <div className="decorate">
                                           <i></i><span></span><i></i>
                                       </div>
                                   </li>
                               </Link>
                               <Link to="/personal/order" style={{width:'100%'}}>
                               <li>
                                   <div className="icon">
                                       <div className="icon-s icon-shopping"></div>
                                   </div>
                                   <div className="title">
                                       <h1>我的订单</h1><span>order</span>
                                   </div>
                                   <div className="decorate">
                                       <i></i><span></span><i></i>
                                   </div>
                               </li>
                               </Link>
                               <Link to="/personal/newmessage" style={{width:'100%'}}>
                               <li>
                                   <div className="icon">
                                       <div className="icon-s icon-settings"></div>
                                   </div>
                                   <div className="title">
                                       <h1>设置</h1><span>setting</span>
                                   </div>
                                   <div className="decorate">
                                       <i></i><span></span><i></i>
                                   </div>
                               </li>
                               </Link>
                           </ul>
                       </div>
                       <div className="designer">
                           <div className="icon">
                               <div className="icon-s icon-heart">
                               </div>
                           </div>
                           <Link to="/personal/commodity">
                           <div className="designer-title">
                               <h1>收藏</h1><span>UI/GUI DESIGNER</span>
                           </div>
                           </Link>
                           <div className="more">
                               <span>更多</span>
                           </div>

                       </div>
                       <ul className="shopping">
                           <li>
                               <div className="top">
                                   <div className="icon icon-shoppingcar">
                                   </div>
                               </div>
                               <div className="bottom">
                                   <div><h3>迷你小冰箱</h3></div>
                                   <div>
                                       <span>MINI</span>&nbsp;
                                       <i>REFRIGERATOR</i>
                                   </div>

                                   <div><h6>$ 2399</h6></div>
                               </div>
                           </li>
                           <li>
                               <div className="top">
                                   <div className="icon icon-shoppingcar">
                                   </div>
                               </div>
                               <div className="bottom">
                                   <div><h3>车载冰箱</h3></div>
                                   <div><span>CAR</span>&nbsp;
                                       <i>REFRIGERATOR</i></div>
                                   <div><h6>$ 4799</h6></div>
                               </div>
                           </li>
                           <li>
                               <div className="top">
                                   <div className="icon icon-shoppingcar">
                                   </div>
                               </div>
                               <div className="bottom">
                                   <div><h3>车载冰箱</h3></div>
                                   <div><span>CAR</span>&nbsp;
                                       <i>REFRIGERATOR</i></div>
                                   <div><h6>$ 4799</h6></div>
                               </div>
                           </li>
                       </ul>
                       <div className="logout">
                           <div className="logout-btn">
                               <i></i> <span>退出登录</span><i></i>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="footer-empty"></div>
               <Footer/>

           </div>
        )
    }
}
export default Index;