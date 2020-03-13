import React, { Component } from "react";
import "./Page.scss";
import { Panel } from "../../../components/ui";
import { RouteComponentProps, withRouter } from "react-router";
import { SearchForm } from "../../../components/other/SearchForm";
import { Divider, message, Modal, Table } from "antd";
import { ColumnProps, PaginationConfig } from "antd/lib/table";
import pageModelApi from "../../../api/messageApi";
import ModalPanel from "../../../components/ui/ModalPanel";
import FormModal from "./FormModal";
import moment from "moment";
import popover from "../../../components/other/Popover";

class AuthList extends Component<IAllTrendProps, any> {
  myRef: any;
  private columns: ColumnProps<IData>[] = [
    {
      title: "产品名称",
      key: "productName",
      dataIndex: "productName",
      align: "center"
    },
    {
      title: "机器编号",
      key: "msgTopic",
      dataIndex: "msgTopic",
      align: "center",
      render: popover
    },
    {
      title: "项目编码",
      key: "format",
      dataIndex: "format",
      align: "center",
      render: popover
    },
    {
      title: "项目名称",
      key: "createName",
      dataIndex: "createName",
      align: "center"
    },
    {
      title: "版本号",
      key: "createName",
      dataIndex: "createName",
      align: "center"
    },
    {
      title: "授权时间",
      key: "createAt",
      dataIndex: "createAt",
      align: "center",
      render: text => (text ? moment(text).format("YYYY-MM-DD HH:mm:ss") : "-")
    },
    {
      title: "授权时间",
      key: "createName",
      dataIndex: "createName",
      align: "center"
    },
    {
      title: "过期时间",
      key: "createAt",
      dataIndex: "createAt",
      align: "center",
      render: text => (text ? moment(text).format("YYYY-MM-DD HH:mm:ss") : "-")
    },
    {
      title: "申请时间",
      key: "createAt",
      dataIndex: "createAt",
      align: "center",
      render: text => (text ? moment(text).format("YYYY-MM-DD HH:mm:ss") : "-")
    },
    {
      title: "操作",
      key: "viewAvgTime",
      dataIndex: "viewAvgTime",
      align: "center",
      width: 80,
      fixed: "right",
      render: (text: any, obj: any) => {
        return (
          <span>
            <a onClick={() => this.edit(obj)}>授权</a>
          </span>
        );
      }
    }
  ];

  constructor(props: IAllTrendProps) {
    super(props);
    this.state = {
      queryParams: {
        pageNum: 1,
        pageSize: 10
      },
      tableData: {},
      inputs: [
        {
          label: "产品名称",
          keyword: "name"
        },
        {
          label: "项目名称",
          keyword: "proName"
        }
      ]
    };
    this.myRef = React.createRef();
  }

  public componentDidMount() {
    // this.queryInitData();
  }

  //   页面数据
  private queryInitData() {
    this.setState({ loading: true }, () => {
      pageModelApi.findMsgType(this.state.queryParams).then(res => {
        this.setState({ loading: false, tableData: res.data.data });
      });
    });
  }

  // 保存
  private saveConfig() {
    this.myRef.current.validateFields((err: any, values: any) => {
      if (!err) {
        if (this.state.detailData) {
          pageModelApi
            .updateMsgType({ ...values, id: this.state.detailData.id })
            .then(() => {
              this.equalFunction("修改成功!");
            });
        } else {
          pageModelApi.createMsgType({ ...values }).then(() => {
            this.equalFunction("创建成功!");
          });
        }
      }
    });
  }
  private equalFunction(msg: string) {
    this.handCancel();
    this.queryInitData();
    message.success(msg);
  }

  //   隐藏弹出框
  private handCancel() {
    this.setState({
      visible: false,
      detailData: null
    });
    this.myRef.current.resetFields();
  }

  public render() {
    const { inputs, visible, detailData } = this.state;
    return (
      <div className="page-msg-addr">
        <SearchForm
          onSearch={this.search}
          inputs={inputs}
          handleReset={this.handleReset}
        />
        <Panel>
          <Table
            columns={this.columns}
            loading={this.state.loading}
            rowKey={record => record.id}
            scroll={{ x: this.columns.length * 120 }}
            dataSource={this.state.tableData}
            onChange={this.tableChange}
            pagination={{
              size: "small",
              current: this.state.tableData.pageNum,
              pageSize: this.state.tableData.pageSize,
              total: +this.state.tableData.total,
              showQuickJumper: true,
              showSizeChanger: true,
              showTotal: () => <span>共{this.state.tableData.total}条</span>
            }}
          />
        </Panel>
        <ModalPanel
          visible={visible}
          title="授权"
          destroyOnClos={true}
          popupSubmit={this.saveConfig.bind(this)}
          popupClose={this.handCancel.bind(this)}
        >
          <FormModal ref={this.myRef} detailData={detailData} />
        </ModalPanel>
      </div>
    );
  }

  private tableChange = (pagination: PaginationConfig) => {
    this.setState(
      {
        queryParams: {
          ...this.state.queryParams,
          pageNum: pagination.current,
          pageSize: pagination.pageSize
        }
      },
      () => {
        this.queryInitData();
      }
    );
  };

  //   搜索
  private search = (obj: any) => {
    this.setState(
      {
        queryParams: { ...obj }
      },
      () => {
        this.queryInitData();
      }
    );
  };

  //   重置
  private handleReset = () => {
    this.setState(
      {
        queryParams: {
          type: null
        }
      },
      () => {
        this.queryInitData();
      }
    );
  };

  // 编辑设备类型
  private edit(obj: any) {
    this.setState({
      detailData: obj,
      visible: true
    });
  }
}

interface IAllTrendProps extends RouteComponentProps {}

interface IData {
  date: string;
  number: number;
  proportion: number;
  id: string;
}

export default withRouter(AuthList);
