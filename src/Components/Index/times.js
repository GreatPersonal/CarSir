/**
 * Created by Administrator on 2017/4/23.
 */
import React, { Component } from 'react';

class Times extends Component{
    render(){
        return(
            <div className="xj_timesbox">
               <div className="xjbox">
                <ul className="time_box">
                    <li className="xj_time">
                        <p></p>
                        <p>8:30</p>
                        <p>结束抢购</p>
                    </li>
                    <li className="interval"></li>
                    <li className="xj_time xj_xz">
                        <p></p>
                        <p>10:30</p>
                        <p>立即抢购</p>
                    </li>
                    <li className="interval"></li>
                    <li className="xj_time">
                        <p></p>
                        <p>12:30</p>
                        <p>准时抢购</p>
                    </li>
                    <li className="interval"></li>
                    <li className="xj_time">
                        <p></p>
                        <p>14:30</p>
                        <p>准时抢购</p>
                    </li>
                </ul>
              </div>
            </div>
         )
        }
}
export default Times;