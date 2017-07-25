import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Commodity extends Component{
    render(){
        return(
            <div className="commodity">
                <div className="gjl_header">
                    <Link to="/personal" className="act">
                        <div className="account icon-arrow"> </div>
                    </Link>
                    <div className="title">
                        <span className="list-1"><i></i><i></i><i></i></span><h1>我的收藏</h1><span className="list-2"><i></i><i></i><i></i></span>
                    </div>
                </div>
                <div className="collect-tab">
                    <div className="collect-wrap">
                        <Link to="/personal/commodity" className="collect-link c-active ">
                            <div className="c-icon">A</div>
                            <div className="c-tab-right"><div className="c-en"><span>COMMODITY</span></div><div className="ctr"><span>LE</span><i>|</i><h3>商品</h3></div></div>
                        </Link>
                        <Link to="/personal/business" className="collect-link">
                            <div className="c-icon">A</div>
                            <div className="c-tab-right"><div className="c-en"><span>BUSINESS</span></div><div className="ctr"><span>LE</span><i>|</i><h3>商家</h3></div></div>
                        </Link>
                    </div>
                </div>
                <ul className="commodity-nav">
                    <li>
                        <div className="com-show">
                            <div className="com-wrap"></div>
                        </div>
                        <div className="com-content">
                            <div className="show-title"><h3>靓车堂（平阳路店）</h3><span></span></div>
                            <div className="show-con"><p>大店区短风北街七巷</p><span>营业中</span></div>
                            <div className="show-num"><span className="icon-shopping">2k</span><span className="icon-text">3.6k</span><span className="icon-house">1.17km</span></div>
                        </div>
                    </li>
                    <li>
                        <div className="com-show">
                            <div className="com-wrap"></div>
                        </div>
                        <div className="com-content">
                            <div className="show-title show-title-2"><h3>水沐车坊</h3><span></span></div>
                            <div className="show-con"><p>平阳街道短治路文华苑大区c2号</p><span>营业中</span></div>
                            <div className="show-num"><span className="icon-shopping">2k</span><span className="icon-text">3.6k</span><span className="icon-house">1.17km</span></div>
                        </div>
                    </li>
                    <li>
                        <div className="com-show">
                            <div className="com-wrap"></div>
                        </div>
                        <div className="com-content">
                            <div className="show-title show-title-3"><h3>四海洗车</h3><span></span></div>
                            <div className="show-con"><p>山西省太原市大店区平阳街道学府街47号</p><span>营业中</span></div>
                            <div className="show-num"><span className="icon-shopping">2k</span><span className="icon-text">3.6k</span><span className="icon-house">1.17km</span></div>
                        </div>
                    </li>
                    <li>
                        <div className="com-show">
                            <div className="com-wrap"></div>
                        </div>
                        <div className="com-content">
                            <div className="show-title"><h3>建仓平洗车行</h3></div>
                            <div className="show-con"><p>大店区短风北街七巷</p><span>营业中</span></div>
                            <div className="show-num"><span className="icon-shopping">2k</span><span className="icon-text">3.6k</span><span className="icon-house">1.17km</span></div>
                        </div>
                    </li>
                    <li>
                        <div className="com-show">
                            <div className="com-wrap"></div>
                        </div>
                        <div className="com-content">
                            <div className="show-title"><h3>靓车堂（平阳路店）</h3><span></span></div>
                            <div className="show-con show-con-active"><p>大店区短风北街七巷</p><span>休息中</span></div>
                            <div className="show-num"><span className="icon-shopping">2k</span><span className="icon-text">3.6k</span><span className="icon-house">1.17km</span></div>
                        </div>
                    </li>
                </ul>
            </div>

        )
    }
}
export default Commodity;