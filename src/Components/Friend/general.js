import React, { Component } from 'react';
import Header from './header';
import BPictureArticle from './bpicturearticle';
import ShareArticle from './sharearticle';
import SPictureArticle from './spicturearticle';

class General extends Component{
    constructor(){
        super();
        this.r = window.location.href.split('=')[1];
        switch(this.r){
            case '1':
                this.title = '车常识';
                break;
            case '2':
                this.title = '车社区';
                break;
            case '3':
                this.title = '车新手';
                break;
            case '4':
                this.title = '先生志';
                break;
        }
        this.state={
            dataSource:[]
        }
    }
    componentDidMount() {
        this.fetchData(this.r ||1);
    }

    componentWillReceiveProps(nextProps) {
        this.fetchData(this.r||1);
    }
    fetchData = (id)=> {
        fetch(`/essay/lists?esid=${id}`)
            .then(res=>res.json())
            .then(data=> {
                this.setState({
                    dataSource:data
                });
            });
    };
    render(){
        return(
            <div className="general">
                <Header title={this.title} left={"icon-arrow"} right={"icon-heart"}/>
                <div className="rlm-temp"></div>
                <SPictureArticle data={this.state.dataSource[0]} title={this.title}/>
                <BPictureArticle data={this.state.dataSource[1]} title={this.title}/>
                <ShareArticle data={this.state.dataSource[2]} title={this.title}/>
            </div>
        )
    }
}

export default General;