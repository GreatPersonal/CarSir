import React, {Component} from 'react';
import './Css/shopping_item.css'
import Header from './header';

/*--------------购物车-----------------*/

class Shopcarmain extends Component{
    /* shopname  物品名称
     * shopnaameus
     *  shopavatar  物品图片
     * shopcarinfo  yanse
     *  shopcaritem  jiage
     * */
    state={
        data:[
            {
                shopname:'Metal decor',
                shopnameus:'金属汽车摆件',
                shopavatar:'hyf_cararlist2.png',
                shopcarinfo:'星空灰',
                shopcaritem:'468.00',
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
                        <div className="shopcar-info">{v.shopcarinfo}</div>
                        <div className="shopcar-info-img"></div>
                        <p className="shopcar-info-item">$&nbsp;<span>{v.shopcaritem}</span></p>
                    </div>
                </div>
                <div className="shopcar-right">
                    <div className="shopping-num-con">
                        <div className="shopping-num shopping-num-0"><i></i></div>
                        <div className="shopping-num-con-item"><p>2</p></div>
                        <div className="shopping-num shopping-num-1"><i className="icon-cross"></i></div>
                    </div>
                    <div className="shopping-options">
                        <div className="shopping-options-collection"><i className="icon-heart"></i><p>收藏</p></div>
                        <div className="shopping-options-del"><i className="icon-delete"></i><p>删除</p></div>
                    </div>
                </div>
            </li>
        ))
        return(
            <div className="shopcar-main container">
                <ul className="shopcar-main-list">
                    {list}
                </ul>
            </div>
        )
    }
}

class Shoppingcar extends Component {

    render() {
        return (
            <div className="hyf-shoppingcar">
                <Header left='icon-arrow' title="购物车" right="icon-edit" href="/shoppingcar-redact"/>
                <div className="hyf-shoppingcar-banner"></div>
                <Shopcarmain/>
            </div>
        )
    }
}

export default Shoppingcar;
