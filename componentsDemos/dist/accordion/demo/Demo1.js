import React, { Component } from "react";
import { Accordion, List } from 'antd-mobile';

/**
 * @title 基础示例1
 * @description 基础示例1的描述
 */

class AccordionExmple extends React.Component {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }} onChange={this.onChange}>
        <Accordion defaultActiveKey="0" className="my-accordion" >
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

export default AccordionExmple;