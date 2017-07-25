import React, {Component} from 'react';
import './Css/index.css';

import Header from './header';
import {Link} from 'react-router-dom';
/*--------------支付-----------------*/
class Shopinfo extends Component{
    /* shopname  物品名称
     * shopnaameus
     *  shopavatar  物品图片
     * shopcarinfo  颜色
     *  shopcaritem  价格
     *  shopcarnum 数量
     * */
    state={
        data:[
            {
                shopname:'Metal decor',
                shopnameus:'金属汽车摆件',
                shopavatar:'hyf_cararlist2.png',
                shopcarinfo:'星空灰',
                shopcaritem:'1298',
                shopcarnum: '01'
            }
        ]
    }
    render(){
        let list = this.state.data.map((v, i) => (
            <li className="hyf-shopcar-main-item" key={i}>
                <div className="shopcar-left">
                    <div className="shopcar-img"><img src={require('./Img/'+v.shopavatar)} alt=""/></div>
                    <div className="shopcar-content">
                        <h2>{v.shopname}</h2>
                        <h3>{v.shopnameus}</h3>
                        <div className="shopcar-info-img"></div>
                        <p className="shopcar-info-item"><span>{v.shopcaritem}</span>RMB</p>
                    </div>
                </div>
                <div className="shopcar-right">
                    <div className="shopcar-info">{v.shopcarinfo}</div>
                    <div className="shopcar-num"><p>数量</p><span className="shopcar-num-info">{v.shopcarnum}</span></div>
                </div>
            </li>
        ))
        return(
            <div className="shopcar-main container">
                {list}
            </div>
        )
    }
}

class Payinit extends  Component{
    render(){
        return(
            <div className="container">
                <div className="hyf-pay-main ">
                    <ul className="pay-main-list">
                        <li className="pay-main-item">
                            <div className="axes"> </div>
                            <div className="pay-optionname">收货人</div>
                            <div className="pay-option"><p className="option-name">派克</p><p className="option-con">137 7384 6979</p></div>
                        </li>
                        <li className="pay-main-item">
                            <div className="axes"> </div>
                            <div className="pay-optionname">收货地址</div>
                            <div className="pay-option"><p className="option-name">陕西省西安市平阳路学府街口</p></div>
                        </li>
                        <li className="pay-main-item">
                            <div className="axes"> </div>
                            <div className="pay-optionname">收货地址</div>
                            <div className="pay-option"><div className="option-img"><img src={require('./Img/hyf_pay_days.png')} alt=""/></div></div>
                        </li>
                        <li className="pay-main-item">
                            <div className="axes"> </div>
                            <div className="pay-optionname">收货地址</div>
                            <div className="pay-option"><p className="option-alert">支付宝</p></div>
                        </li>
                    </ul>
                    <div className="hfy-pay-option"><img src={require('./Img/hyf_pay_alert.png')} alt=""/></div>
                </div>
            </div>
        )
    }
}


class  Paycontent extends Component{
    state={
        display:true
    }
    render(){
        return(
            <div>
                <div className="hyf-paycontent">
                    <div className="paycontent-title"><img src={require('./Img/hyf_pay_title.png')} alt=""/></div>
                    <div className="paycontent-main container">
                        <ul className="paycontent-list">
                            <li className="weixin"> </li>
                            <li className="alipay"> </li>
                            <li className="meituan"> </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-pay"><a href="#" onClick={()=>this.setState({display:!this.state.display})}>立即购买 | $<span>636</span></a></div>
                <div className="writepassword" style={{display:this.state.display !== true ? 'block' : 'none' }}>
                    <div className="writepassword-con"></div>
                    <div className="background" onClick={()=>this.setState({display:true})}> </div>
                </div>
            </div>

        )
    }
}


class Pay extends Component {;

    render() {
        return (
            <div className="hyf-pay">
                <Header left="icon-arrow" title="订单详情" />
                <div className="hyf-shoppingcar-banner"></div>
                <Shopinfo/>
                <Payinit/>
                <Paycontent/>
            </div>
        )
    }
}

export default Pay;
