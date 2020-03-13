import React, { Component } from "react";
import { Form, Input, Radio, Select, DatePicker } from "antd";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};

const { Option } = Select;

class UserForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    console.log(11111);
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { detailData } = this.props;
    return (
      <div className="create-equip">
        <Form>
          <Form.Item
            label="工号"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("addr", {
              initialValue: (detailData && detailData.addr) || undefined,
              rules: [{ required: true, message: "请输入用户工号!" }]
            })(<Input placeholder="请输入用户工号..." />)}
          </Form.Item>
          <Form.Item
            label="姓名"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("name", {
              initialValue: (detailData && detailData.name) || undefined,
              rules: [{ required: true, message: "请输入用户姓名!" }]
            })(<Input placeholder="请输入用户姓名..." />)}
          </Form.Item>
          <Form.Item
            label="性别"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("sex", {
              initialValue: (detailData && detailData.sex) || 1,
              rules: [{ required: true, message: "请选择性别!" }]
            })(
              <Radio.Group>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item
            label="岗位名称"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("addr", {
              initialValue: (detailData && detailData.addr) || undefined,
              rules: [{ required: true, message: "请输入岗位名称!" }]
            })(<Input placeholder="请输入岗位名称..." />)}
          </Form.Item>
          {detailData ? (
            <Form.Item
              label="在职状态"
              {...formItemLayout}
              style={{ marginBottom: 10 }}
            >
              {getFieldDecorator("addr", {
                initialValue: (detailData && detailData.addr) || undefined,
                rules: [{ required: true, message: "请选择在职状态!" }]
              })(
                <Select>
                  <Option value={1}>在职</Option>
                  <Option value={2}>离职</Option>
                </Select>
              )}
            </Form.Item>
          ) : (
            <Form.Item
              label="入职日期"
              {...formItemLayout}
              style={{ marginBottom: 10 }}
            >
              {getFieldDecorator("addr", {
                initialValue: (detailData && detailData.addr) || undefined,
                rules: [{ required: true, message: "请选择入职日期!" }]
              })(<DatePicker style={{ width: "100%" }} />)}
            </Form.Item>
          )}
        </Form>
      </div>
    );
  }
}

export default Form.create<any>()(UserForm);
