
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
            <div className="shopcar-container">
                <div className="shopcarredact active" data-id={i}>
                    <div className="shopcarredact-cen"></div>
                </div>
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
                </li>
            </div>

        ))
        return(
            <div className="shopcar-main">
                <ul className="shopcar-main-list">
                    {list}
                </ul>
            </div>
        )
    }
}

class Shoppingcarredact extends Component {

    render() {
        return (
            <div className="hyf-shopcarredact">
                <Header left='icon-arrow' title="购物车" right="icon-edit" />
                <Shopcarmain/>
            </div>
        )
    }
}

export default Shoppingcarredact;
