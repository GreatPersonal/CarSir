// 小图片文章组件
import React, { Component } from 'react';
import User from './friend_user';
class SPictureArticle extends Component{
    render(){
        if(!this.props.data){
            return null;
        }
        let LisImg = this.props.data["e_img"].split(',');
        return(
            <div className="spicturearticle">
                <User data={this.props.data} title={this.props.title}/>
                <div className="rlm-spa-img-lis-wrap">
                    <p>{this.props.data["e_text"]}</p>
                    <div className="spa-img-lis">
                        <img src={require(`./Imgs/${LisImg[0]}`)} alt="" className="spa-img-item"/>
                        <img src={require(`./Imgs/${LisImg[1]}`)} alt="" className="spa-img-item"/>
                        <img src={require(`./Imgs/${LisImg[2]}`)} alt="" className="spa-img-item"/>
                    </div>
                </div>
                <div className="rlm-comment">
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-eye"></i>
                        <span>{this.props.data["look"]}</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-laud"></i>
                        <span>{this.props.data["laud"]}</span>
                    </a>
                    <a href="#" className="rlm-comment-item">
                        <i className="icon-comments"></i>
                        <span>{this.props.data["reply"]}</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default SPictureArticle;