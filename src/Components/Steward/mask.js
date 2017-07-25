import React, { Component } from 'react';
import Calendar from 'antd/lib/calendar';
import {Link} from 'react-router-dom';
class Mask extends Component{
    render(){
        return(
            <div className="mask">
                <div className="calendar" style={{ width: 320, border: '1px solid #d9d9d9', borderRadius: 4 ,}}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                    <div className="time">
                        <ul>
                            <li>8:00-10:00</li>
                            <li>10:00-12:00</li>
                            <li>12:00-14:00</li>
                            <li>14:00-16:00</li>
                            <li>尽快服务</li>
                        </ul>
                    </div>
                </div>
                <Link to="/nicecar" className="tally"><i className="icon-fit"></i></Link>
            </div>
        )
    }
}
function onPanelChange(value, mode) {
    console.log(value, mode);
}
export default Mask;