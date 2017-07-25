import React, { Component } from 'react';

class Map extends Component{
    render(){
        return(
            <div className="dy-map-wrap">
                <div className="dy-map-banner-wrap">
                    <div className="dy-map-item">
                        <a href="">
                            <div className="dy-map-left"><span className="abuss-info-right"><i className="icon-pointer"></i><p>1.17km</p></span></div>
                            <div className="dy-map-center">
                                <div className="map-center-title">大店区短风北街七巷</div>
                                <div className="map-center-site">大约开车10分钟</div>
                            </div>
                            <div className="dy-map-right"><img src={require('./imgs/pyl.png')} alt=""/></div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Map;