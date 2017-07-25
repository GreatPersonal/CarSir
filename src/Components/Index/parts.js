import React, {Component} from 'react';
import './Css/index.css';

import Header from './header';
import Shopping_item from './shopping_item';
/*--------------配件-----------------*/
class Parts extends Component {;

    render() {
        let item = [
            {
                id:'1',
                title:'金属摆件',
                info:'车载创意小车模型车上用品车饰',
                img:'hyf_parts_1.png',
                rmb:'666',
            },
            {
                id:'2',
                title:'飞机模型',
                info:'车载创意飞机模型车上用品车饰',
                img:'hyf_parts_2.png',
                rmb:'315',
            },
            {
                id:'3',
                title:'车用风扇',
                info:'车载创意小车用香薰车上用品车饰',
                img:'hyf_parts_3.png',
                rmb:'468',
            }
        ]
        return (
            <div className="hyf-parts">
                <Header left="icon-arrow" title="香水摆件"/>
                <div className="parts-list container">
                    <Shopping_item  data={item}/>
                </div>
            </div>
        )
    }
}

export default Parts;
