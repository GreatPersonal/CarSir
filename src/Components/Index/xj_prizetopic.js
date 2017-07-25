/**
 * Created by Administrator on 2017/4/25.
 */
import React, { Component } from 'react';

class Prizetopiclist extends Component{
    render(){
        return(
            <div className="xj_prizetopiclistsbigbox">
                <div className="xj_prizetopiclistsbox">
                    <ul className="xj_prizetopiclists">
                        <li>
                            <p><img src={require('./Img/scenery03.png')} alt=""/></p>
                            <span>
                            <p>
                                <i>我是你的眼</i>
                                <i>5分钟前</i>
                            </p>
                            <p>从今以后保持低调，对自己的美貌与智慧绝口不提</p>
                           </span>
                        </li>
                        <li>
                            <p className="first"><img src={require('./Img/scenery03.png')} alt="" className="first_img"/></p>
                            <p><img src={require('./Img/scenery_06.png')} alt="" className="second_img"/></p>
                        </li>
                        <li>
                            <span>
                                <p className="icon-eye"></p>
                                <p>4424</p>
                            </span>
                            <span>
                               <a href="#"><p className="icon-laud xj_active"></p></a>
                                <p>5443</p>
                            </span>
                            <span>
                                <a href="#"><p className="icon-typing"></p></a>
                                <p>333</p>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="xj_prizetopiclistsbox">
                    <ul className="xj_prizetopiclists">
                        <li>
                            <p><img src={require('./Img/accessories_18.png')} alt=""/></p>
                            <span>
                            <p>
                                <i>大石碎胸口</i>
                                <i>5分钟前</i>
                            </p>
                            <p>从今以后保持低调，对自己的美貌与智慧绝口不提</p>
                           </span>
                        </li>
                        <li></li>
                        <li>
                            <span>
                                <p className="icon-eye"></p>
                                <p>4424</p>
                            </span>
                            <span>
                                <a href=""><p className="icon-laud xj_active"></p></a>
                                <p>5443</p>
                            </span>
                            <span>
                               <a href=""><p className="icon-typing"></p></a>
                                <p>333</p>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="xj_prizetopiclistsbox">
                    <ul className="xj_prizetopiclists">
                        <li>
                            <p><img src={require('./Img/hyf_banner1.png')} alt=""/></p>
                            <span>
                            <p>
                                <i>八百 三千</i>
                                <i>5分钟前</i>
                            </p>
                            <p>从今以后保持低调，对自己的美貌与智慧绝口不提</p>
                           </span>
                        </li>
                        <li>
                            <p><img src={require('./Img/scenery_11.png')} alt=""  className="active"/></p>
                        </li>
                        <li>
                            <span>
                                <p className="icon-eye"></p>
                                <p>4424</p>
                            </span>
                            <span>
                                <a href=""><p className="icon-laud xj_active"></p></a>
                                <p>5443</p>
                            </span>
                            <span>
                                <a href=""><p className="icon-typing"></p></a>
                                <p>333</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default  Prizetopiclist;
