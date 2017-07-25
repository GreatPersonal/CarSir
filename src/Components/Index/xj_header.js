import React, { Component } from 'react';
class Header extends Component{
    render(){
        return(
            <nav className="xj-header container">
                <a className="xj-header-left"onClick={(e)=>{e.stopPropagation();history.back();}}><i className="icon-arrow"></i></a>
                <div className="xj-header-center">
                    <form action="">
                        <div className="icon-search xj-search"></div>
                        <input type="text" placeholder="店铺/车品/订单"/>
                        <div className="xj_voice">
                            <ul>
                                <li className="icon-mic xj-mic"></li>
                            </ul>
                        </div>
                    </form>
                </div>
                <a className="xj-header-left"><i className=""></i></a>
            </nav>
        )
    }
}

export default Header;