// 分享文章组件
import React, { Component } from 'react';
import User from './friend_user';
class ShareArticle extends Component{
    render(){
        if(!this.props.data){
            return null;
        }
        return(
            <div className="sharearticle">
                <User data={this.props.data} title={this.props.title}/>
                <div className="sa-content">
                    <div className="sa-content-wrap">
                        <img src={require(`./Imgs/${this.props.data['e_img']}`)} alt="" className="sa-content-img"/>
                        <div className="sa-content-text-wrap">
                            <div className="sa-content-text">
                                <p>{this.props.data['e_title']}</p>
                                <h6>知乎日报</h6>
                            </div>
                            <div className="sa-content-right">分享文章</div>
                        </div>
                    </div>
                </div>
                <div className="rlm-comment">
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-eye"></i>
                        <span>{this.props.data['look']}</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-laud"></i>
                        <span>{this.props.data['laud']}</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-comments"></i>
                        <span>{this.props.data['reply']}</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default ShareArticle;