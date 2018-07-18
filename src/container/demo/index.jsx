import React from "react"
import Tabs from 'components/tabs'
import { Button } from 'antd'
import styles from './index.less'



export default class Demo extends React.Component {
    // 1
    constructor(props) {
        super(props)
        this.state = { value: 0 }
        this.data = [
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
    }
    // 2 渲染到DOM之后执行（挂载）
    componentDidMount() {

    }
    // 3、使用setState 周期性性的更新组件本地状态
    autoChange() {

    }
    // 4、卸载
    componentWillUnmount() {
    }
    up = () => {
        console.log('up')
        this.setState({
            value: this.state.value + 1
        })
    }
    down = () => {
        console.log('down')
        this.setState({
            value: this.state.value - 1 < 0 ? 0 : this.state.value - 1
        })
    }
    render() {
        return (
            <div className="clock-wrap">
                <Tabs activeKey={this.state.value || 0} tabPosition='top' tabBarStyle={styles.bar} data={this.data} />
                <Button onClick={this.up}>增加</Button>
                <Button onClick={this.down}>减小</Button>
            </div>
        )
    }
}
