import React, { Component } from 'react';
import Timeline from 'antd/lib/timeline';
import 'antd/dist/antd.min.css';

class Timelines extends Component{
    render(){
        return(
            <div className="dy-timeline">
                <div className="dy-timeline-serve container">
                    <Timeline className="timesline">
                        <Timeline.Item className="timesline-item"><span>服务地址</span><span>小金刚(先生) <b>18435130762</b></span><p>平阳路学府街口凯通大厦</p></Timeline.Item>
                        <Timeline.Item className="timesline-item"><span>服务方式</span><span>上门取车</span></Timeline.Item>
                        <Timeline.Item className="timesline-item"><span>服务项目</span><span>室内清洗 补胎</span></Timeline.Item>
                        <Timeline.Item className="timesline-item"><span>服务时间 </span><span><i>4月21日 星期三 12:00-14:00</i></span></Timeline.Item>
                        <Timeline.Item className="timesline-item"><span>支付方式</span><span><i>支付宝</i></span></Timeline.Item>
                    </Timeline>
                </div>
            </div>
        )
    }
}


class Content extends Component{
    render(){
        return(
            <div className="dy-content">
                <Timelines/>
            </div>
        )
    }
}
export default Content;