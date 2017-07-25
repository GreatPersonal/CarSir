import React, { Component } from 'react';
class Essay extends Component{
    render(){
        return(
            <div>
                <div className="essay-wrap">
                    <p>生活就应该浪费在美好的事物上</p>
                    <img src={require('./Imgs/d-a-1.png')} alt="" className="essay-img"/>
                    <img src={require('./Imgs/d-a-2.png')} alt="" className="essay-img"/>
                    <img src={require('./Imgs/d-a-3.png')} alt="" className="essay-img"/>
                </div>
                <div className="laud">
                    <div className="laud-head-wrap">
                        <img src={require('./Imgs/rlm-user-head-1.png')} className="laud-head" alt=""/>
                        <img src={require('./Imgs/rlm-user-head-2.png')} className="laud-head" alt=""/>
                        <img src={require('./Imgs/rlm-user-head-3.png')} className="laud-head" alt=""/>
                        <img src={require('./Imgs/rlm-user-head-4.png')} className="laud-head" alt=""/>
                        <img src={require('./Imgs/rlm-user-head-5.png')} className="laud-head" alt=""/>
                    </div>
                    <div className="quantity"><span className="all">108</span><span className="restore">201回复</span></div>
                    <i className="icon-lauds"></i>
                </div>
            </div>
        )
    }
}
export default Essay;