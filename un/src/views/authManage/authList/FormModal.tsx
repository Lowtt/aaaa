import React, { Component } from "react";
import { Form, Input, Select, Icon, Popover, InputNumber } from "antd";
const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1321791_uqi0k0rwqqd.js"
});
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};
const { Option } = Select;

class AuthAddForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {}

  public render() {
    const { getFieldDecorator } = this.props.form;
    const { detailData } = this.props;
    return (
      <div className="create-equip">
        <Form>
          <Form.Item
            label="产品名称"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("productName", {
              initialValue:
                (detailData && detailData.productName) || undefined,
              rules: [{ required: true, message: "请输入产品名称!" }]
            })(
              <Input placeholder="请输入产品名称..." />
            )}
          </Form.Item>
          <Form.Item
            label="项目名称"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("msgTopic", {
              initialValue: (detailData && detailData.msgTopic) || undefined,
              rules: [{ required: true, message: "请输入项目名称!" }]
            })(<Input placeholder="请输入项目名称..." />)}
          </Form.Item>
          <Form.Item
            label="授权年限"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("year", {
              initialValue: (detailData && detailData.year) || undefined,
              rules: [{ required: true, message: "请输入授权年限!" }]
            })(<InputNumber min={0} placeholder='请输入授权年限' style={{width:'100%'}} />)}
          </Form.Item>
          <Form.Item
            label="版本号"
            {...formItemLayout}
            style={{ marginBottom: 10 }}
          >
            {getFieldDecorator("v", {
              initialValue: (detailData && detailData.v) || undefined,
              rules: [{ required: true, message: "请输入版本号!" }]
            })(<Input placeholder="请输入版本号..." />)}
          </Form.Item>
        </Form>
        
      </div>
    );
  }
}

export default Form.create<any>()(AuthAddForm);
