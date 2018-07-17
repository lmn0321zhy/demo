import React from 'react';
import classNames from 'classnames';
import styles from './index.less'

const data = [
    {
        name: 'Tab1',
        value: '1',
        active: true
    },
    {
        name: 'Tab2',
        value: '2'
    },
    {
        name: 'Tab3',
        value: '3'
    }
]
export default class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            tabPosition: 'left'
        }
    }


    // 2 渲染到DOM之后执行（挂载）
    componentDidMount() {
        this.Timer = setInterval(
            () => this.autoChange(),
            1000
        )
    }
    // 3、使用setState 周期性性的更新组件本地状态
    autoChange() {
        this.setState({
            date: new Date()
        })
    }
    // 4、卸载
    componentWillUnmount() {
        clearInterval(this.Timer)
    }
    handleChick = (item, index) => {
        const data = this.state.data;
        const newData = data.map((k, i) => {
            if (i === index) {
                return Object.assign({}, k, { active: true })
            }
            return Object.assign({}, k, { active: false })
        })
        this.setState({
            data: newData
        })
    }
    render() {
        const { data, tabPosition } = this.state;
        // classNames({ 'tabs-' + tabPosition: true});
        const dull_tabs = 'dull_tabs_' + tabPosition;
        const dull_tabs_tabsBar = 'dull_tabs_tabsBar_' + tabPosition;
        const dull_tabs_tabsItem = 'dull_tabs_tabsItem_' + tabPosition;
        const dull_tabs_tabsItem_active = 'dull_tabs_tabsItem_active_' + tabPosition;
        const tabsContent = data.map((item, index) => {
            return <div key={index} className={item.active ? styles[dull_tabs_tabsItem_active] : styles[dull_tabs_tabsItem]} onClick={() => this.handleChick(item, index)}>
                {item.name}
            </div>
        })
        return (
            <div className={styles[dull_tabs]}>
                <div className={styles[dull_tabs_tabsBar]}>
                    {tabsContent}
                </div>
                <div className={styles.content}>

                </div>
            </div>
        )
    }
}
