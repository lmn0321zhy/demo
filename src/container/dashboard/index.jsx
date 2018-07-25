import React from "react"
import { Cascader } from 'antd';
import Service from 'api/httpServer';
import SiderMenu from "components/sider-menu";
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
            code: 752100,
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400,
        }],
    }],
}];

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
    displayRender = (labels, selectedOptions) => labels.map((label, i) => {
        const option = selectedOptions[i];
        if (i === labels.length - 1) {
            return (
                <span key={option.value}>
                    {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
            </span>
            );
        }
        return <span key={option.value}>{label} / </span>;
    });
    handleAreaClick(e, label, option) {
        e.stopPropagation();
        console.log('clicked', label, option);
    }

    render() {
        return (
            <div style={{ height: '100%' }}>
                <SiderMenu style={{ height: '100%' }} collapsed={false} />
            </div>
        )
    }
}