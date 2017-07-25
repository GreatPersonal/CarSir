import React, { Component } from 'react';
import './Static/Css/icon.css';
import './Static/Css/base.css';
import {BrowserRouter, Route} from 'react-router-dom';
// 路由相关    载入路由要显示的组件， 注意路径
// 首页
import Index from './Components/Index/index';
//车品区
import Cararticles from './Components/Index/cararticles';
//优质配件
import Parts from './Components/Index/parts';
//商品详情
import Description from './Components/Index/description';
//购物车
import Shoppingcar from './Components/Index/shoppingcar';
import Shoppingcarredact from './Components/Index/shoppingcar-redact';
import Shoppingpay from './Components/Index/pay';

// 车管家
import Steward from './Components/Steward/steward';
//靓车堂
import Nicecar from './Components/Steward/nicecar';
import Plus from './Components/Steward/plus';
import Calendar from './Components/Steward/calendar';
import Order from './Components/Steward/order';
import Pay from './Components/Steward/pay';
import Maskpay from './Components/Steward/maskpay';
// 车友汇
import Frined from './Components/Friend/friend';
// 车常识
import General from './Components/Friend/general';
// 车友汇详情
import Detailer from './Components/Friend/friend_detailed';
// 个人中心
import Personal from './Components/Personal/personal';
// 发帖页面
import EditPage from './Components/Common/editpage';
//限时抢购
import Shopping from './Components/Index/shopping';
//违章查询
import Violation from './Components/Index/violation';
//有奖话题
import Prizetopic from './Components/Index/prizetopic';
//搜索
import  Search from './Components/Index/search';
// =================================================================================
//       下面写要url切换的路由路径， 和要切换到的组件页面   除了'/' 需要exact  别的只写path
// =================================================================================


class App extends Component {
  render() {
    return (
        <BrowserRouter>
           <div>
             <Route exact path="/" component={Index}/>
             <Route path="/steward" component={Steward}/>
             <Route path="/nicecar" component={Nicecar}/>
             <Route path="/plus" component={Plus}/>
             <Route path="/calendar" component={Calendar}/>
             <Route path="/order" component={Order}/>
             <Route path="/pay" component={Pay}/>
             <Route path="/maskpay" component={Maskpay}/>
             <Route path="/frined" component={Frined}/>
             <Route path="/general" component={General}/>
             <Route path="/detailer" component={Detailer}/>
             <Route path="/personal" component={Personal}/>
             <Route path="/editpage" component={EditPage}/>



             <Route path="/shoppin" component={Shopping}></Route>
             <Route path="/violation" component={Violation}></Route>
             <Route path="/prizetopic" component={Prizetopic}></Route>
             <Route path="/search" component={Search}></Route>

             <Route path="/cararticles" component={Cararticles}/>
             <Route path="/parts" component={Parts}/>
             <Route path="/description" component={Description}/>
             <Route path="/shoppingcar" component={Shoppingcar}/>
             <Route path="/shoppingcar-redact" component={Shoppingcarredact}/>
             <Route path="/shoppingpay" component={Shoppingpay}/>

           </div>
        </BrowserRouter>
    );
  }
}

export default App;
