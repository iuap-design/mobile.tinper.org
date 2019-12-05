import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Button from './button/index';
import Accordion from './accordion/index';
import 'antd-mobile/dist/antd-mobile.css'
import './app.less'



class App extends Component{
    render(){
        return <div className='link'>
        <Link to="/">首页</Link>
        <Link to="/button">button</Link>
        <Link to="/accordion">Accordion</Link>
    </div>
    }
}

class Sidebar extends Component{
    render(){
        return (
            <Router>
                <div className='demo-sidebar'>
                    <Route exact path="/" component={ Button } />
                    {/* <Route path="/button" component={ Accordion } /> */}
                    {/* <Route path="/accordion" component={ Accordion } /> */}
                </div>
            </Router>
        )
    }
}



ReactDOM.render(<Sidebar/>, document.getElementById('mobileDemo'));