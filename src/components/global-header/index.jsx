import React, { PureComponent } from 'react';
import { Menu, Icon, Layout, Badge, Button } from 'antd';
import { connect } from 'react-redux';
import { login } from 'action'
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class GlobalHeader extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            user: null,
            error: null
        }
    }
    componentDidMount() {
        const { login } = this.props;
        if (login) {
            this.props.login();
        }
    }
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme" >
                <span style={{ paddingLeft: '15px', color: '#ff0000', fontSize: '25px' }}>管理系统</span>
                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                    onClick={this.menuClick}
                >
                    <Menu.Item key="1">
                        <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
                            <Icon type="notification" />
                        </Badge>
                    </Menu.Item>
                    <SubMenu title={<span className="avatar">刘梦南<i className="on bottom b-white" /></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - 刘梦南</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Button style={{ height: '65px', width: '45px' }} type="primary" icon="logout" size='large' />

                </Menu>
            </Header>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.login.loading,
        user: state.login.user,
        error: state.login.error
    }
};
const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);