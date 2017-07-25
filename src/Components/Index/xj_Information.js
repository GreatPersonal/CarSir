/**
 * Created by Administrator on 2017/4/24.
 */
import React, { Component } from 'react';

class Information extends Component{
    render(){
        return(
               <div className="xj_informationbigbox">
                   <div className="xj_informationbox">
                       <ul className="xj_information">
                           <li>
                               <p>
                                   <img src={require('./Img/xj_car_03.png')} alt=""/>
                               </p>
                           </li>
                           <li>
                           <span>
                               <p>甲壳虫</p>
                               <p>DAZHONG JIA KE CHONG</p>
                           </span>
                               <p className="chepai">晋A 8B728</p>
                           </li>
                       </ul>
                   </div>

               </div>
        )
    }
}
export default  Information;
