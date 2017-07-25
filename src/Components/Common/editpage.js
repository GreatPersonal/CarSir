import React, { Component } from 'react';
import Header from '../Friend/header';
class EditPage extends Component{
    render(){
        return(
            <div className="rlm-edit-page">
                <Header title={'发帖'} left={'icon-arrow'} right={'icon-sending'}/>
                <div className="edit-main container">
                    <div className="edit-title">
                        <i className="edit-icon"></i>
                        <input type="text" placeholder="请输入标题"/>
                    </div>
                    <div className="textarea-wrap">
                        <textarea name="textarea" placeholder="发帖吧"></textarea>
                        <div className="address">
                            <i className="address-icon"></i>
                            <span>上海市浦东区</span>
                        </div>
                    </div>
                    <div className="permit-wrap">
                        <span className="permit-text">允许他人观看</span>
                        <span className="permit-btn"><i className="permit-y"></i></span>
                    </div>
                </div>
                <div className="rlm-edit-footer container">
                    <span>同步到</span>
                    <i className="circle-icon"></i>
                    <i className="space-icon"></i>
                    <i className="sina-icon"></i>
                </div>
            </div>
        )
    }
}
export default EditPage;