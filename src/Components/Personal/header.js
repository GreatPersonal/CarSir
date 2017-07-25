import React,{Component} from 'react';
// import './Css/gjl_homepage.css';
import {Link} from 'react-router-dom';
class Sns extends Component{
    render(){
        return(
            <div className="gjl_header">
                <div className="title">
                    <span className="list-1"><i></i><i></i><i></i></span><h1>个人中心</h1><span className="list-2"><i></i><i></i><i></i></span>
                </div>
                <Link to="/personal/account" className="set">
                    <div className="setting icon-settings"> </div>
                </Link>
            </div>
        )
    }
}
class Header extends Component{
    judgment=()=>{

    };
    render(){
        return(
            <div>
                <Sns path="/personal" component={Sns}/>
            </div>
        )
    }
}
export default Header;