import React from "react"
import SiderMenu from "components/sider-menu";

import styles from './index.less';
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
            <div className={styles.container}>
                <SiderMenu collapsed={false} />
            </div>
        )
    }
}