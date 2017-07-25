import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Business extends Component{
    render(){
        return(
            <div className="business">
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
                        <Link to="/personal/commodity" className="collect-link ">


                                    <div className="c-icon">A</div>
                                    <div className="c-tab-right"><div className="c-en"><span>COMMODITY</span></div><div className="ctr"><span>LE</span><i>|</i><h3>商品</h3></div></div>

                        </Link>
                        <Link to="/personal/business" className="collect-link c-active">


                                    <div className="c-icon">A</div>
                                    <div className="c-tab-right"><div className="c-en"><span>BUSINESS</span></div><div className="ctr"><span>LE</span><i>|</i><h3>商家</h3></div></div>


                        </Link>
                    </div>
                </div>
                <ul className="business-nav">
                    <li>
                        <div className="bus-show">
                            <div className="bus-wrap"></div>
                        </div>
                        <div className="bus-content">
                            <div className="bus-con-left">
                                <div className="show-title"><h3>METAL DECOR</h3></div>
                                <div className="show-con"><p>金属汽车</p><span>摆件</span></div>
                                <div className="show-dis"><span>星空灰</span></div>
                                 <div className="show-x">XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                                <div className="show-money">$ 468.00</div>
                            </div>
                            <div className="bus-con-right"><i>+</i><span>2</span><i>—</i></div>
                        </div>
                    </li>
                    <li>
                        <div className="bus-show">
                            <div className="bus-wrap"></div>
                        </div>
                        <div className="bus-content">
                            <div className="bus-con-left">
                                <div className="show-title"><h3>METAL DECOR</h3></div>
                                <div className="show-con"><p>金属汽车</p><span>摆件</span></div>
                                <div className="show-dis"><span>星空灰</span></div>
                                 <div className="show-x">XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                                <div className="show-money">$ 468.00</div>
                            </div>
                            <div className="bus-con-right"><i>+</i><span>2</span><i>—</i></div>
                        </div>
                    </li>
                    <li>
                        <div className="bus-show">
                            <div className="bus-wrap"></div>
                        </div>
                        <div className="bus-content">
                            <div className="bus-con-left">
                                <div className="show-title"><h3>METAL DECOR</h3></div>
                                <div className="show-con"><p>金属汽车</p><span>摆件</span></div>
                                <div className="show-dis"><span>星空灰</span></div>
                                 <div className="show-x">XXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                                <div className="show-money">$ 468.00</div>
                            </div>
                            <div className="bus-con-right"><i>+</i><span>2</span><i>—</i></div>
                        </div>
                    </li>
                    <div className="bus-cha"><span>没有更多了</span>
                    <div className="bus-lis"><i></i><i></i><i></i></div></div>
                </ul>
            </div>

        )
    }
}
export default Business;