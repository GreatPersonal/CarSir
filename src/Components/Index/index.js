import React, {Component} from 'react';
import './Css/index.css';
/*--------------index-----------------*/
import Footer from '../Common/footer';
import Main from './main';
import Header from './header';

class Index extends Component {
    render() {
        return (
            <div className="hyf-index">
                <Header left="icon-pointer" title="车先生" right="icon-search"/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default Index;