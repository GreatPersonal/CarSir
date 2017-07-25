import React, { Component } from 'react';
class User extends Component{
    render(){
        if(!this.props.data){
            return null;
        }

        return(
            <div className="rlm-user">
                <div className="rlm-user-head" style={{'background-image':`url(./Imgs/${this.props.data['portrait']})`}}></div>
                <div className="rlm-user-info">
                    <div className="rlm-user-info-wrap">
                        <div className="rlm-user-text"><h6>{this.props.data['name']}</h6><i className="rlm-user-icon-1"></i><i className={this.props.data['medal']}></i><span className={this.props.data['honor']}>{this.props.data['issue']}分钟前</span></div>
                        <p>{this.props.data['sign']}</p>
                    </div>
                </div>
                <div className="rlm-user-kind">#{this.props.title}</div>
            </div>
        )
    }
}
export default User;