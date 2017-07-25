import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Title extends Component{
    render(){
        return(
            <div className="dy-title container">
                <div className="dy-sjnew"></div>
                <div className="dy-fwxm"></div>
            </div>
        )
    }
}
class Project extends Component{
    render(){
        return(
            <div className="dy-project">
                <div className="dy-init container">
                    <ul className="dy-project-items">
                        <li><img src={require('./imgs/baoyang.png')} alt=""/><p>保养</p><p>￥180</p></li>
                        <li><img src={require('./imgs/bls.png')} alt=""/><p>玻璃水</p><p>￥10</p></li>
                        <li><img src={require('./imgs/slhw.png')} alt=""/><p>四轮换位</p><p>￥40</p></li>
                    </ul>
                    <ul className="dy-project-items">
                        <li><img src={require('./imgs/qcfy.png')} alt=""/><p>全车封釉</p><p>￥360</p></li>
                        <li><img src={require('./imgs/snqx.png')} alt=""/><p>室内清洗</p><p>￥80</p></li>
                        <li><img src={require('./imgs/bt.png')} alt=""/><p>补胎</p><p>￥20</p></li>
                    </ul>
                    <ul className="dy-project-items">
                        <li><img src={require('./imgs/sldw.png')} alt=""/><p>四轮定位</p><p>￥50</p></li>
                        <li><img src={require('./imgs/yqm.png')} alt=""/><p>油漆面</p><p>￥200</p></li>
                        <li><img src={require('./imgs/ktqx.png')} alt=""/><p>空调清洗</p><p>￥40</p></li>
                    </ul>
                </div>
            </div>
        )
    }
}
class Evaluate extends Component{
    render(){
        return(
            <div className="dy-evaluate">
                <div className="dy-init container">
                    <div className="dy-pingce"></div>
                </div>
            </div>
        )
    }
}
class Button extends Component{
    render(){
        return(
            <div className="dy-button">
                <div className="dy-init">
                    <Link to="/calendar" className="dy-left-button">预约洗车</Link>
                    <Link to="/order" className="dy-right-button">立即结算</Link>
                </div>
            </div>
        )
    }
}
class Plue extends Component{
    render(){
        return(
            <Link to="/plus" className="dy-pluse">
                +
            </Link>
        )
    }
}
class Main extends Component{
    render(){
        return(
            <div className="dy-main">
                <Title/>
                <Project/>
                <Evaluate/>
                <Button/>
                <Plue/>
            </div>
        )
    }
}
export default Main;
