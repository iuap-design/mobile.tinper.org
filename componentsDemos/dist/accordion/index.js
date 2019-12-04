import React, { Component } from "react";
import Demo1 from './demo/Demo1'
import Demo2 from './demo/Demo2'

class AccordionExmple extends React.Component {

  render() {
    return (
      <div className='demo'>
        <div className='demo-item'>
            <div className='demo-item-title'>基础示例1</div>
            <Demo1/>
        </div>
        <div className='demo-item'>
            <div className='demo-item-title'>基础示例2</div>
            <Demo2/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<AccordionExmple/>, document.getElementById('mobileDemo'));