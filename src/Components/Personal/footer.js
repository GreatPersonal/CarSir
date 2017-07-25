import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
                <div className="gjl_footer">
                    <Link to="/">
                    <div className="logout">
                        <h2>退出账号</h2>
                    </div>
                    </Link>
                    <div className="lis">
                        <i></i><span></span><i></i>
                    </div>
                    <div className="describe">
                        <span>WITHDRAW FROM</span>
                    </div>
                </div>
        )
    }
}
export default Footer;