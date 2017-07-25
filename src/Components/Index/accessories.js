/**
 * Created by Administrator on 2017/4/24.
 */
import React, { Component } from 'react';

class Accessories extends Component{
    render(){
        return(
            <div className="xj_accessoriesbigbox">
                <div className="xj_accessoriesbox">
                    <div className="xj_accessories">
                        <ul className="accessories">
                            <li>
                                <img src={require('./Img/accessories_08.png')} alt=""/>
                            </li>
                            <li>
                                <p>Auto icos pack</p>
                                <p>一氧化二氮系统</p>
                            </li>
                            <li>
                                <p>798 RMD</p>
                                <a href="#"></a>
                            </li>
                        </ul>
                        <ul className="accessories xj_left">
                            <li>
                                <img src={require('./Img/accessories_05.png')} alt=""/>
                            </li>
                            <li>
                                <p>Auto icos pack</p>
                                <p>一氧化二氮系统</p>
                            </li>
                            <li>
                                <p>798 RMD</p>
                                <a href="#"></a>
                            </li>
                        </ul>

                        <ul className="accessories">
                            <li>
                                <img src={require('./Img/accessories12.png')} alt=""/>
                            </li>
                            <li>
                                <p>Auto icos pack</p>
                                <p>一氧化二氮系统</p>
                            </li>
                            <li>
                                <p>798 RMD</p>
                                <a href="#"></a>
                            </li>
                        </ul>
                        <ul className="accessories xj_left">
                            <li>
                                <img src={require('./Img/accessories_05.png')} alt=""/>
                            </li>
                            <li>
                                <p>Auto icos pack</p>
                                <p>一氧化二氮系统</p>
                            </li>
                            <li>
                                <p>798 RMD</p>
                                <a href="#"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Accessories;