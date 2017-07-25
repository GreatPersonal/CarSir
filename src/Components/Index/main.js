import React, {Component} from 'react';
import Icon from 'antd/lib/icon';

//导航组件

import {Link} from 'react-router-dom';
//

/*--------------index-----------------*/
class Banner extends Component {
    render() {
        return (
            <div className="hyf-banner-main">
                <ul className="hyf-banner-img">
                    <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                    <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                    <a href=""><img src={require('./Img/hyf_banner1.png')} alt=""/></a>
                </ul>
                <ul className="hyf-banner-list">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

class Speedy extends Component {
    render() {
        return (
            <div className="hyf-speedy container">
                <ul className="hyf-speedy-main">
                    <li className="hyf-speedy-con">
                        <Link to="/shoppin">
                            <div className="hyf-speed-img"></div>
                            <p className="title">限时抢购</p>
                        </Link>
                    </li>
                    <li className="hyf-speedy-con">
                        <Link to="/cararticles">
                            <div className="hyf-speed-img"></div>
                            <p className="title">车品区</p>
                        </Link>
                    </li>
                    <li className="hyf-speedy-con">
                        <Link to="/violation">
                            <div className="hyf-speed-img"></div>
                            <p className="title">违章查询</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

class Opimization extends Component {
    render() {
        return (
            <div className="hyf-optimization">
                <div className="hyf-optim-title">
                    <div className="title"></div>
                </div>
                <ul className="hyf-optim-con ">
                    <li></li>
                    <li className="hyf-optim-item container">
                        <Link to="/parts">
                            <h2><span>access</span>ories</h2>
                            <h3>优质配件</h3>
                            <div className="inner">
                                <Icon type="plus"/>
                            </div>
                            <p>精挑细选 为您选优</p>
                        </Link>
                    </li>
                    <li></li>
                    <li className="hyf-optim-item container">
                        <Link to="/prizetopic">
                            <h2><span>conver</span>sation</h2>
                            <h3>有奖话题</h3>
                            <div className="inner">
                                <Icon type="plus"/>
                            </div>
                            <p>你开车去的最美的地方</p>
                        </Link>
                    </li>
                    <li></li>
                    <li className="hyf-optim-item container">
                        <Link to="">
                            <h2><span>profe</span>ssional</h2>
                            <h3>上门服务</h3>
                            <div className="inner">
                                <Icon type="plus"/>
                            </div>
                            <p>三重发动机舱清洗</p>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

class Abussiness extends Component {
    render() {
        return (
            <div className="hyf-abuss container">
                <div className="title">
                    <div className="title-con"><a href=""></a></div>
                </div>
                <ul className="hyf-abuss-list">
                    <li className="hyf-abuss-item">
                        <a href="">
                            <div className="hyf-abuss-left"><img src={require('./Img/hyf_list1.png')} alt=""/></div>
                            <div className="hyf-abuss-center">
                                <div className="abuss-center-title">靓车堂（平阳路店）</div>
                                <div className="abuss-center-site">大店区短风北街七巷</div>
                                <div className="abuss-center-info">
                                    <span className="abuss-info-left"><i
                                        className="icon-shoppingcar"></i><p>2k</p></span>
                                    <span className="abuss-info-center"><i className="icon-text"></i><p>3.6k</p></span>
                                    <span className="abuss-info-right"><i
                                        className="icon-house"></i><p>1.17km</p></span>
                                </div>
                            </div>
                            <div className="hyf-abuss-right active">营业中</div>
                        </a>
                    </li>
                    <li className="hyf-abuss-item">
                        <a href="">
                            <div className="hyf-abuss-left"><img src={require('./Img/hyf_list2.png')} alt=""/></div>
                            <div className="hyf-abuss-center">
                                <div className="abuss-center-title">靓车堂（平阳路店）</div>
                                <div className="abuss-center-site">大店区短风北街七巷</div>
                                <div className="abuss-center-info">
                                    <span className="abuss-info-left"><i
                                        className="icon-shoppingcar"></i><p>2k</p></span>
                                    <span className="abuss-info-center"><i className="icon-text"></i><p>3.6k</p></span>
                                    <span className="abuss-info-right"><i
                                        className="icon-house"></i><p>1.17km</p></span>
                                </div>
                            </div>
                            <div className="hyf-abuss-right active">未营业</div>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Speedy/>
                <Opimization/>
                <Abussiness/>
            </div>
        )
    }
}

export default Main;