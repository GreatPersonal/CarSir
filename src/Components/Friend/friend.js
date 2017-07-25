import React, { Component } from 'react';
import './Css/rlm_friend.css';
// 车友汇头部组件
import Header from './header';
// 页面信息载体
import Main from './main';
// 底部切换
import Footer from '../../Components/Common/footer';
class Friend extends Component{
    render(){
        return(
            <div className="rlm-friend">
                <Header title={'车友汇'} left={'icon-pointer'} right={'icon-search'}/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default Friend;