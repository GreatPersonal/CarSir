/**
 * Created by Administrator on 2017/4/24.
 */
import React, { Component } from 'react';
import './Css/header.css';
import './Css/xj_violation.css';
// 头部组件
import Header from './header';
//车辆信息 组件
import Information from './xj_Information';
//违章列表组件
import Violationlist from './xj_violationlist';
//提醒组件
import Remind from './xj_remind';
class Violation extends Component{
    render(){
        return(
            <div className="xj_information">
                <Header left="icon-arrow" title="违章查询"/>
                <Information/>
                <Violationlist/>
                <Remind/>
            </div>
        )
    }
}
export default Violation;