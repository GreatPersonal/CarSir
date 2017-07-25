import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Css/rlm_edit.css';
class Edit extends Component{
    render(){
        return(
            <Link to="/editpage" className="rlm-edit"/>
        );
    }
}
export default Edit;