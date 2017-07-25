/**
 * Created by Administrator on 2017/4/25.
 */
import React, { Component } from 'react';
import './Css/xj_prizetopic.css';
// 头部组件
import Header from './header';
//banner 组件
import Banner from './xj_banner';
//有奖列表组件
import Prizetopiclist from './xj_prizetopic';

class Prizetopic extends Component{
     render(){
         return(
             <div className="bigbox">
                 <Header left="icon-arrow" title="有奖话题" right="icon-search"/>
                 <Banner/>
                 <Prizetopiclist/>
             </div>
         )
     }
}
export default Prizetopic;