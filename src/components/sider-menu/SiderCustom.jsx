/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import routes from './config';
import SiderMenu from './SiderMenu';
import styles from './index.less';

const { Sider } = Layout;

class SiderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            openKey: '',
            selectedKey: '',
            firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        };
    }
    setMenuOpen = props => {
        const { pathname } = props.location;
        return {
            openKey: pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey: pathname
        };
    };
    onCollapse = (collapsed) => {
        return {
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        };
    };
    componentDidMount() {
        const state = this.setMenuOpen(this.props);
        this.setState(state);
    }
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    clickCollapse = (collapsed) => {
        const state1 = this.setMenuOpen(this.props);
        const state2 = this.onCollapse(collapsed);
        const data = {
            ...state1,
            ...state2,
            firstHide: collapsed,  // 两个不等时赋值props属性值否则为false
            openKey: this.state.openKey || (!collapsed && state1.openKey)
        }
        this.setState({
            ...data,
            collapsed: collapsed
        })
    }
    render() {
        const { collapsed = false } = this.state;
        let IconDiv = <span onClick={() => this.clickCollapse(false)}><Icon style={{ fontSize: '20px', color: 'white', position: 'fixed', bottom: '50px', marginLeft: '40px' }} type="right-circle-o" /></span>
        if (!collapsed) {
            IconDiv = <span onClick={() => this.clickCollapse(true)} > <Icon style={{ fontSize: '20px', color: 'white', position: 'fixed', bottom: '50px', marginLeft: '160px' }} type="left-circle-o" /></ span>
        }
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={collapsed}
                className={collapsed ? styles.subMenuVertical : styles.subMenuInline}
            >
                <div className={styles.logo} />
                <SiderMenu
                    menus={routes.menus}
                    onClick={this.menuClick}
                    theme="dark"
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.openMenu}
                />
                {IconDiv}
            </Sider>
        )
    }
}

export default withRouter(SiderCustom);