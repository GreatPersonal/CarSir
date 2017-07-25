import React, {Component} from 'react';
import './Css/shopping_item.css'
import {Link} from 'react-router-dom';

/*--------------配件列表-----------------*/
class Shopping_item extends Component {

    render() {
        let list = this.props.data.map((v, i) => (
            <li className="hyf-shopping_item" key={i}>
                <Link to="/description" className="hyf-shopitem">
                    <div className="hyf-item-src">
                        <img src={require('./Img/' + v.img)} alt=""/>
                        <div className="cart"><i className="icon-shoppingcar"></i></div>
                    </div>
                    <div className="hyf-item-con">
                        <div className="item-title"><h3>{v.title}</h3><p className="cost"><span>{v.rmb}</span>.00</p>
                        </div>
                        <p className="info">{v.info}</p>
                    </div>
                </Link>
            </li>
        ))
        return (
            <ul className="hyf-parts-list">
                {list}
            </ul>
        )
    }
}

export default Shopping_item;
