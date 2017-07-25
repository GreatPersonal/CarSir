import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Zhezhao extends Component{
    render(){
        return(
            <div className="zhezhao">
                <ul className="fuwu">
                    <li>店面洗车</li>
                    <li>上门洗车</li>
                    <li>上门取车</li>
                </ul>
                <div className="zhezhaonew"><i className="icon-comments"></i></div>
                <Link to="/nicecar" className="zhezhaoclose"><i className="icon-cross"></i></Link>
            </div>
        )
    }
}
export default Zhezhao;