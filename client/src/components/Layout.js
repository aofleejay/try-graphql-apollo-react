import React, { Component } from 'react'
import { Layout as AntLayout, Menu } from 'antd'
const { Header, Content, Footer } = AntLayout

class Layout extends Component {
  render() {
    return (
      <AntLayout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px 50px 0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </AntLayout>
    )
  }
}

export default Layout