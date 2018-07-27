import React from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import { DocumentTitle } from 'react-document-title';
import styles from './index.less';
import { login } from 'action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (this.props.events && typeof this.props.events.login === 'function') {
          this.props.events.login('LOGIN', values)
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const user = this.props.user;
    const layout = <div className={styles.loginDiv}>
      <div className={styles.login}>
        <div className={styles.header}>
          <h3>欢迎</h3>
        </div>
        <div className={styles.body}>
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                登录
                </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    return (
      <div>
        { user?<Redirect to='/dashboard' /> : layout }
      </div>
      // <DocumentTitle>
      // {layout}

      // </DocumentTitle>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm)
// 传入所有state，返回指定的state数据，放入到当前组件props中
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    loading: state.login.loading,
    user: state.login.user,
    error: state.login.error
  }
};
//传入dispatch，返回使用bindActionCreators()绑定的action方法
const mapDispatchToProps = (dispatch) => ({
  events: bindActionCreators(Object.assign({}, { login }), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
