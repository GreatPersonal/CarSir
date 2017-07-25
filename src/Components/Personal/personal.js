import  React, {Component} from 'react';
import './Css/gjl_homepage.css';
import Index from './index';
import Account from './myaccount';
import UserAccount from './useraccount';
import Newmessage from './newmessage';
import Message from './message';
import Order from './order';
import Evaluate from './evaluate';
import Myfriend from './myfriend';
import Mymessage from './mymessage';
import Business from './business-collect';
import Commodity from './commodity-collect';
import {Route} from 'react-router-dom';
class Personal extends Component{
    render(){
        return(
            <div>
            <Route exact path="/personal" component={Index}/>
            <Route path="/personal/account" component={Account}/>
            <Route path="/personal/useraccount" component={UserAccount}/>
            <Route path="/personal/newmessage" component={Newmessage}/>
            <Route path="/personal/message" component={Message}/>
            <Route path="/personal/order" component={Order}/>
            <Route path="/personal/evaluate" component={Evaluate}/>
            <Route path="/personal/myfriend" component={Myfriend}/>
            <Route path="/personal/mymessage" component={Mymessage}/>
            <Route path="/personal/Commodity" component={Commodity}/>
            <Route path="/personal/Business" component={Business}/>
            </div>
        )
    }
}
export default Personal;