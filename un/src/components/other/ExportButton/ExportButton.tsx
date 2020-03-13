import React, {Component} from "react";
import "./ExportButton.scss";
import {Button, message, Upload} from "antd";
import baseCofig from "../../../config/baseConfig";
import ExportApi from "../../../api/export";

import axios from "axios";

const pack = require("../../../../package.json");
const UPLOADER = (window as any).UPLOADER;
class ExportButton extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      exportLoading: false,
      uploadLoading: false,
      fileList: []
    };
  }

  // 导出文件
  private downloadFile = () => {
    if (this.props.tableData && !this.props.tableData.length) {
      message.warning("暂无数据,无法导出!");
      return;
    }
    // if (!this.props.params.interval && !this.props.params.ids.length) {
    //   let _this = this;
    //   Modal.confirm({
    //     title: "确定导出查询出的所有数据吗?",
    //     okText: "确定",
    //     cancelText: "取消",
    //     width: 400,
    //     onOk() {
    //       _this.okExport();
    //     }
    //   });
    // } else {
    this.okExport();
    // }
  };

  private okExport() {
    this.setState({ exportLoading: true }, () => {
      let params = { ...this.props.params };
      axios.defaults.headers.common["Authorization"] =
        baseCofig.authorizationInfo ||
        "eyJhbGciOiJIUzI1NiJ9.eyJyZWFsTmFtZSI6IkFkbWluIiwiZGVwdElkIjoxMjksInRlbmFudElkIjpudWxsLCJpZCI6IjEiLCJleHAiOjE1NzI4OTI1ODJ9.zHPb2ygcnVaqg8KQix0lqFf_w6NCrGhtUxtLI2eQ4Sg";
      let url = baseCofig.baseUrl + "/api/0/attribute/selectAttrExcel";
      axios.post(url, params).then((res: any) => {
        this.setState({ exportLoading: false });
        if (res.data.data) {
          let link = document.createElement("a");

          link.href = res.data.data;
          link.click();
          link.remove();
        } else {
          message.error("导出失败!");
        }
      });
    });
  }

  //   判断上传文件格式以及大小
  private beforeUpload(file: any) {
    let result =
      file.type === "application/vnd.ms-excel" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.name.substr(-4) === ".xls";
    let isExcel = result;
    if (!isExcel) {
      message.error("只能上传excel文件!");
    } else {
      this.setState({
        isUpload: true
      });
    }
    return isExcel;
  }

  //   文件上传(导入)
  private handleChange = (imgList: any) => {
    let fileList = this.state.fileList;
    let isUpload = this.state.isUpload;
    let length = imgList.fileList.length;
    if (isUpload || fileList.length > length) {
      this.setState({
        fileList: imgList.fileList,
        isUpload: false,
        uploadLoading: true
      });
    }

    if (imgList.file.status == "done") {
      let url = imgList.file.response.data.url;
      this.import(url);
    }
  };

  // 删除文件
  private onRemovePic(e: any) {
    this.setState({
      isRemove: true
    });
  }

  // 导入文件
  private import(url: string) {
    ExportApi.import({ fileName: url })
      .then(() => {
        this.setState({ fileList: [], uploadLoading: false }); //清空上传列表
        message.success("导入成功!");
        this.props.queryPageData();
      })
      .catch(err => {
        this.setState({ uploadLoading: false });
      });
  }

  // 下载模板
  private downloadTem() {
    ExportApi.downloadTemplate({}).then(res => {
      let link = document.createElement("a");
      link.href = res.data.data;
      link.click();
      link.remove();
    });
  }

  public render() {
    const { needImport} = this.props;
    const { fileList, isRemove } = this.state;
    return (
      <div className="btn-group" style={{ top: "20px" }}>
        {needImport ? (
          <span style={{ float: "left" }}>
            <Button
              style={{ marginRight: "10px" }}
              className="btn-export"
              type="primary"
            >
              <a onClick={() => this.downloadTem()}>下载模板</a>
            </Button>
            <Upload
              action={UPLOADER}
              onChange={this.handleChange.bind(this)}
              beforeUpload={this.beforeUpload.bind(this)}
              onRemove={this.onRemovePic.bind(this)}
              fileList={fileList}
              openFileDialogOnClick={!fileList.length}
            >
              <Button
                loading={isRemove ? false : this.state.uploadLoading}
                style={{ marginRight: "10px" }}
                className="btn-export"
                type="primary"
                icon="upload"
                onClick={() => {
                  this.importClick();
                }}
              >
                导入
              </Button>
            </Upload>
          </span>
        ) : (
          ""
        )}
        <span>
          <Button
            loading={this.state.exportLoading}
            onClick={this.downloadFile}
            className="btn-export"
            type="primary"
            icon="download"
          >
            导出
          </Button>
        </span>
      </div>
    );
  }

  private importClick() {
    if (this.state.fileList.length) {
      message.warning("请删除失败文件后再导入!");
    }
  }
}

export default ExportButton;
