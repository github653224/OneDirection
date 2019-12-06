import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { NavBar, Icon,Tabs,Carousel,Accordion, List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class ShoolLogo extends Component {
    onChange = (key) => {
        console.log(key);
      }
    render() {
        return (
            <div>
                <div>
                    <NavBar
                        style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                        leftContent={[
                            <Link to="/school"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                        ]}>
                            学科专业
                    </NavBar>
                    <div style={{ marginTop: 10, marginBottom: 10 }}>
                        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                            <Accordion.Panel header="校名">
                                <List className="my-list">
                                    <List.Item><img style={{height:'15vh',width:'90vw'}} src='gonglve/xiaoming.png'></img></List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="校训" className="pad">
                                <List className="my-list">
                                    <List.Item><img style={{height:'45vh',width:'40vw'}} src='gonglve/xiaoxun.png'></img></List.Item>
                                </List>
                            </Accordion.Panel>
                            <Accordion.Panel header="校徽" className="pad">
                                <List className="my-list">
                                    <List.Item>
                                        <img style={{height:'33vh',width:'60vw'}} src='gonglve/xiaohui.gif'></img>
                                    </List.Item>
                                </List>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}
