import React, {Component} from 'react'
import {Button, Form, Icon, Input} from 'antd';
import {RouteComponentProps} from 'react-router'
import './Login.scss'
import {observer} from 'mobx-react';

@observer
class NormalLoginForm extends Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      isShowGmv: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  private handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFields((err:any, values:any) => {
      if (!err) {
        this.props.history.push("/flow-monitor")
        // userApi.login({
        //   username:values.account,
        //   password:values.password
        
        // },{
        //   headers: {'Content-Type':'application/x-www-form-urlencoded'}
        // }).then(res=>{
        //   console.log(res)
        // })
      }
    });
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="page-login">
        <div className="main">
          <div className="login-form">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('account', {
                  rules: [{ required: true, message: '请输入你的账号！' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入你的密码！' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div >
    )
  }

  public componentDidMount() {

  }

}

interface ILoginProps extends RouteComponentProps {
  form: any,
}

interface ILoginState {
  isShowGmv: boolean
}

interface ILoginReq {

}

export default Form.create()(NormalLoginForm);

// export default withRouter(WrappedNormalLoginForm)