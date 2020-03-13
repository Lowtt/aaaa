import React from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import "./SearchForm.scss";

const FormItem = Form.Item;
const Option = Select.Option;

export interface ISearchFormProps {
  onRef?: any;
  form: any;
  onSearch: any;
  onSelect: any;
  handleReset: any;
  inputs: any;
  selects: any;
  btnList: any;
  datePicker: any;
}

class SearchForm extends React.Component<ISearchFormProps, any> {
  constructor(props: ISearchFormProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.onRef && this.props.onRef(this);
  }

  private handleSearch = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        this.props.onSearch(values);
      }
    });
  };

  private onSelectChange = () => {
    setTimeout(() => {
      this.props.onSearch(this.props.form.getFieldsValue());
    }, 200);
  };

  private handleReset = () => {
    this.props.form.resetFields();
    this.props.handleReset();
  };
  public render() {
    const { inputs, selects, btnList, datePicker } = this.props;

    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row>
            {inputs &&
              inputs.map((item: any, index: number) => {
                return (
                  <Col key={index} span={6}>
                    <FormItem
                      label={item.label}
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 15 }}
                    >
                      {getFieldDecorator(
                        `${item.keyword}`,
                        {}
                      )(<Input placeholder="请输入关键字" allowClear />)}
                    </FormItem>
                  </Col>
                );
              })}

            {selects &&
              selects.map((item: any, index: number) => {
                return (
                  <Col key={index} span={6}>
                    <FormItem
                      label={item.label}
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 15 }}
                    >
                      {getFieldDecorator(`${item.keyword}`, {
                        initialValue: item.defaultValue
                          ? item.defaultValue
                          : undefined
                      })(
                        <Select
                          mode={item.mode}
                          showSearch={item.showSearch || false}
                          allowClear
                          optionFilterProp={
                            item.optionFilterProp
                              ? item.optionFilterProp
                              : "value"
                          }
                          placeholder="请选择..."
                          onChange={this.onSelectChange}
                        >
                          {item.options &&
                            item.options.length > 0 &&
                            item.options.map((item: any, index: number) => {
                              return (
                                <Option value={item.id} key={"option" + index}>
                                  {item.disName}
                                </Option>
                              );
                            })}
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                );
              })}
            {datePicker &&
              datePicker.map((item: any, index: number) => {
                return (
                  <Col key={index} span={6}>
                    <FormItem
                      label={item.label}
                      labelCol={{ span: 6 }}
                      wrapperCol={{ span: 15 }}
                    >
                      {getFieldDecorator(`${item.keyword}`, {
                        initialValue: item.defaultValue
                          ? item.defaultValue
                          : undefined
                      })(<DatePicker />)}
                    </FormItem>
                  </Col>
                );
              })}

            {inputs || selects ? (
              <Col span={4} style={{ marginTop: "4px" }}>
                <Button type="default" htmlType="submit">
                  检索
                </Button>
                <Button
                  style={{ marginLeft: 8 }}
                  onClick={this.handleReset.bind(this)}
                >
                  重置
                </Button>
              </Col>
            ) : (
              ""
            )}
            {btnList &&
              btnList.map((btn: any, index: number) => (
                <Col span={2} key={index} style={{ marginTop: "4px" }}>
                  <Button
                    type={btn.type || "default"}
                    icon={btn.icon}
                    onClick={btn.onClick}
                  >
                    {btn.text}
                  </Button>
                </Col>
              ))}
          </Row>
        </Form>
      </div>
    );
  }
}
export default Form.create<any>()(SearchForm);
