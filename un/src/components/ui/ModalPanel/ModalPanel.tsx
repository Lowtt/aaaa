import React from "react";
import {Form, Modal} from "antd";

class ModalPanel extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    //this.from:any = React.createRef();
  }
  public componentWillReceiveProps(nextProps: any) {
    // let { visible, model } = nextProps
    // if (visible && visible != this.props.visible) {
    // 	let fieldType = model.fieldType ? model.fieldType : '';
    // 	let defaultValue=model.value?model.value:'';
    // 	this.setState({ fieldType,defaultValue })
    // }
  }

  private submitData = () => {
    let { popupSubmit } = this.props;
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        popupSubmit(values);
      }
    });
  };

  private onCancel = () => {
    let { popupClose } = this.props;
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        popupClose(values);
      }
    });
  };

  public render() {
    let { visible, title, width, destroyOnClose } = this.props;

    return (
      <div>
        <Modal
          title={title}
          visible={visible}
          destroyOnClose={destroyOnClose}
          maskClosable={false}
          okText="确定"
          cancelText="取消"
          onOk={this.submitData}
          onCancel={this.onCancel}
          width={width || 520}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}
export default Form.create<any>()(ModalPanel);
