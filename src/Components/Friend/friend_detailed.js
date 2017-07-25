import React, { Component } from 'react';
import Header from './header';
import User from './friend_user';
import Essay from './essay';
import Comment from './comment';
class Detailer extends Component{
    render(){
        return(
            <div>
                <Header title={'车友汇'} left={'icon-arrow'} right={'icon-heart'}/>
                <div className="detailer-main-wrap">
                    <div className="container">
                        <User/>
                        <Essay/>
                        <Comment/>
                        <Comment/>
                        <Comment/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detailer;