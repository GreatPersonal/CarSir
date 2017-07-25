import React, { Component } from 'react';

class Floor extends Component{
    render(){
        return(
            <div  className="comment-info-button">
                <div className="floor-title">
                    <span className="floor-name">黄飞鸿:</span>
                    <span className="floor-text">呵呵!</span>
                </div>
                <div className="floor-time">1分钟</div>
            </div>
        )
    }
}
class Comment extends Component{
    render(){
        return(
            <div className="rlm-comment-wrap">
                <div className="comment-use">
                    <img src={require('./Imgs/rlm-user-head-3.png')} className="comment-use-head" alt=""/>
                    <div className="comment-info">
                        <div className="comment-info-top">
                            <div className="comment-words">
                                <h6 className="comment-name">大石碎胸口</h6>
                                <p className="comment-time">5分钟前</p>
                                <p className="conmment-text">那你不是好棒棒!</p>
                            </div>
                            <div className="storey">1楼</div>
                        </div>
                        <Floor/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;