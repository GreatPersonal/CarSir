import React, { Component } from 'react';
// 小图片文章组件
import SPictureArticle from './spicturearticle';
// 分享文章组件
import ShareArticle from './sharearticle';
// 大图文章组件
import BPictureArticle from './bpicturearticle';

class Record extends Component{
    render(){
        return(
            <div className="rlm-record-wrap container">
                <SPictureArticle/>
                <ShareArticle/>
                <BPictureArticle/>
            </div>
        )
    }
}
export default Record;