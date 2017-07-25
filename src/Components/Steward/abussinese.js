import React, {Component} from 'react';
// import Icon from 'antd/lib/icon';
import {
    Link
}from 'react-router-dom';
import 'antd/dist/antd.min.css';
class Abussinese extends Component{
    render(){
        return (
            <div className="dy-abuss container">
                <ul className="dy-abuss-list">
                    <li className="dy-abuss-item">
                        <Link to="/nicecar">
                            <div className="dy-abuss-left"><img src={require('./imgs/pyl.png')} alt=""/></div>
                            <div className="dy-abuss-center">
                                <div className="abuss-center-title">靓车堂（平阳路店）
                                    <span className="xunzhang1"><img src={require('./imgs/xunzhang1.png')} alt=""/></span>
                                    <span className="xunzhang2"><img src={require('./imgs/xunzhang2.png')} alt=""/></span>
                                </div>
                                <div className="abuss-center-site">大店区短风北街七巷</div>
                                <div className="abuss-center-info">
                                    <span className="abuss-info-left"><i className="icon-shoppingcar"></i><p>2k</p></span>
                                    <span className="abuss-info-center"><i className="icon-text"></i><p>3.6k</p></span>
                                    <span className="abuss-info-right"><i className="icon-house"></i><p>1.17km</p></span>
                                </div>
                            </div>
                            <div className="dy-abuss-right active">营业中</div>
                        </Link>
                    </li>
                    <li className="dy-abuss-item">
                        <a href="">
                            <div className="dy-abuss-left"><img src={require('./imgs/smcf.png')} alt=""/></div>
                            <div className="dy-abuss-center">
                                <div className="abuss-center-title">水木车坊
                                    <span className="xunzhang2"><img src={require('./imgs/xunzhang2.png')} alt=""/></span>
                                </div>
                                <div className="abuss-center-site">平阳街道短治路文华苑大区c2号</div>
                                <div className="abuss-center-info">
                                    <span className="abuss-info-left"><i className="icon-shoppingcar"></i><p>2k</p></span>
                                    <span className="abuss-info-center"><i className="icon-text"></i><p>3.6k</p></span>
                                    <span className="abuss-info-right"><i className="icon-house"></i><p>1.17km</p></span>
                                </div>
                            </div>
                            <div className="dy-abuss-right active">营业中</div>
                        </a>
                    </li>
                    <li className="dy-abuss-item">
                        <a href="">
                            <div className="dy-abuss-left"><img src={require('./imgs/shxc.png')} alt=""/></div>
                            <div className="dy-abuss-center">
                                <div className="abuss-center-title">四海洗车</div>
                                <div className="abuss-center-site">太原市大店区平阳街道学府街47号</div>
                                <div className="abuss-center-info">
                                    <span className="abuss-info-left"><i className="icon-shoppingcar"></i><p>2k</p></span>
                                    <span className="abuss-info-center"><i className="icon-text"></i><p>3.6k</p></span>
                                    <span className="abuss-info-right"><i className="icon-house"></i><p>1.17km</p></span>
                                </div>
                            </div>
                            <div className="dy-abuss-right active">营业中</div>
                        </a>
                    </li>
                    <li className="dy-abuss-item">
                        <a href="">
                            <div className="dy-abuss-left"><img src={require('./imgs/jcpc.png')} alt=""/></div>
                            <div className="dy-abuss-center">
                                <div className="abuss-center-title">建仓平洗车行</div>
                                <div className="abuss-center-site">大店区短风北街七巷</div>
                                <div className="abuss-center-info">
                                    <span className="abuss-info-left"><i className="icon-shoppingcar"></i><p>2k</p></span>
                                    <span className="abuss-info-center"><i className="icon-text"></i><p>3.6k</p></span>
                                    <span className="abuss-info-right"><i className="icon-house"></i><p>1.17km</p></span>
                                </div>
                            </div>
                            <div className="dy-abuss-right active">营业中</div>
                        </a>
                    </li>
                    <li className="dy-abuss-item">
                        <a href="">
                            <div className="dy-abuss-left"><img src={require('./imgs/smcf.png')} alt=""/></div>
                            <div className="dy-abuss-center">
                                <div className="abuss-center-title">靓车堂（平阳路店）</div>
                                <div className="abuss-center-site">大店区短风北街七巷</div>
                                <div className="abuss-center-info">
                                    <span className="abuss-info-left"><i className="icon-shoppingcar"></i><p>2k</p></span>
                                    <span className="abuss-info-center"><i className="icon-text"></i><p>3.6k</p></span>
                                    <span className="abuss-info-right"><i className="icon-house"></i><p>1.17km</p></span>
                                </div>
                            </div>
                            <div className="dy-abuss-right active1">休息中</div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Abussinese;