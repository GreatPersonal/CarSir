/**
 * Created by Administrator on 2017/4/23.
 */
import React, { Component } from 'react';
import './Css/xj_shopping.css';
// 头部组件
import Header from './header';
//banner 组件
import Banner from './xj_banner'
//时间 组件
import Times from  './times'
//配件展示 组件
import Accessories from './accessories'
import Xjcenter from  './xj_center'

class Shopping extends Component{
    render(){
        return(
            <div className="xj-friend">
                <Header left="icon-arrow" title="限时抢购" right="icon-search"/>
                <Banner/>
                <Times/>
                <Accessories/>
                <Xjcenter/>
                <Accessories/>
            </div>
        )
    }
}

export default Shopping;
