import React from "react"
import { Button } from 'antd';
import Service from 'api/httpServer';

export default class AjaxDemo extends React.Component {

    constructor(props) {
        super(props)
        console.log(props, "Clock")
        this.state = {
            data: ''
        }

    }
    // 2 渲染到DOM之后执行（挂载）
    componentDidMount() {

    }

    // 4、卸载
    componentWillUnmount() {
        clearInterval(this.Timer)
    }
    handleChick = () => {
        Service.post('/mock/demo.json', {}, (data) => {
            this.setState({
                data: JSON.stringify(data)
            })
        })
    }
    render() {
        return (
            <div className="clock-wrap">
                <Button type="primary" onClick={this.handleChick}>请求</Button>
                <p>
                    {this.state.data}
                </p>
            </div>
        )
    }
}