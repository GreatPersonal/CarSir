import React, { Component } from 'react';

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
                        <li><img src={require('./imgs/baoyang.png')} alt=""/><p>保养</p><p>￥180</p></li>
                        <li><img src={require('./imgs/bls.png')} alt=""/><p>玻璃水</p><p>￥10</p></li>
                        <li><img src={require('./imgs/slhw.png')} alt=""/><p>四轮换位</p><p>￥40</p></li>
                    </ul>
                    <ul className="dy-project-items">
                        <li><img src={require('./imgs/baoyang.png')} alt=""/><p>保养</p><p>￥180</p></li>
                        <li><img src={require('./imgs/bls.png')} alt=""/><p>玻璃水</p><p>￥10</p></li>
                        <li><img src={require('./imgs/slhw.png')} alt=""/><p>四轮换位</p><p>￥40</p></li>
                    </ul>
                </div>
            </div>
        )
    }
}
class Button extends Component{
    render(){
        return(
            <div className="dy-button-zy">
                <div className="dy-init">
                    <div className="dy-left-zy">预约洗车</div>
                    <div className="dy-right-zy">立即结算</div>
                </div>
            </div>
        )
    }
}
class Plusmain extends Component{
    render(){
        return(
            <div className="dy-plusmain">
                <Title/>
                <Project/>
                <Button/>
            </div>
        )
    }
}
export default Plusmain;