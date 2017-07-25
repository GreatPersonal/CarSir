import React, { Component } from 'react';

import {Link} from 'react-router-dom';
class Maskorder extends Component{
    render(){
        return(
            <div className="dy-maskorder">
                <Link to="/maskpay" className="dy-maskorder-zhiwen">
                    <img src={require('./imgs/zhiwen.png')} alt=""/>
                    <p>请验证指纹完成支付</p>
                    <p>OR</p>
                    <p>输入密码</p>
                </Link>
            </div>
        )
    }
}
export default Maskorder;
