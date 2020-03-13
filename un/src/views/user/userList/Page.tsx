import React, { Component } from "react";
import "./Page.scss";
import { Panel } from "../../../components/ui";
import { RouteComponentProps, withRouter } from "react-router";
import { SearchForm } from "../../../components/other/SearchForm";
import { message, Table } from "antd";
import { ColumnProps, PaginationConfig } from "antd/lib/table";
import pageModelApi from "../../../api/messageApi";
import ModalPanel from "../../../components/ui/ModalPanel";
import FormModal from "./FormModal";
import moment from "moment";

class PageUserList extends Component<IAllTrendProps, any> {
  myRef: any;
  private columns: ColumnProps<IData>[] = [
    {
      title: "工号",
      key: "addr",
      dataIndex: "addr",
      align: "center"
    },
    {
      title: "姓名",
      key: "name",
      dataIndex: "name",
      align: "center"
    },

    {
      title: "性别",
      key: "sex",
      dataIndex: "sex",
      align: "center"
    },
    {
      title: "出生日期",
      key: "birthday",
      dataIndex: "birthday",
      align: "center"
    },
    {
      title: "岗位名称",
      key: "gn",
      dataIndex: "gn",
      align: "center"
    },
    {
      title: "入职日期",
      key: "ru",
      dataIndex: "ru",
      align: "center"
    },
    {
      title: "状态",
      key: "status",
      dataIndex: "status",
      align: "center"
    },
    {
      title: "离职时间",
      key: "goAt",
      dataIndex: "goAt",
      align: "center",
      render: text => (text ? moment(text).format("YYYY-MM-DD HH:mm:ss") : "-")
    },
    {
      title: "创建时间",
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
            <a onClick={() => this.edit(obj)}>编辑</a>
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
          label: "用户姓名",
          keyword: "name"
        }
      ],

      btnList: [
        {
          text: "增加用户",
          type: "primary",
          onClick: () => {
            this.addUser();
          }
        }
      ]
    };
    this.myRef = React.createRef();
  }

  public componentDidMount() {
    this.queryInitData();
  }

  //   页面数据
  private queryInitData() {
    this.setState({ loading: true }, () => {
      pageModelApi.queryMsgAddr(this.state.queryParams).then(res => {
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
            .updateMsgAddr({ ...values, id: this.state.detailData.id })
            .then(() => {
              this.equalFunction("修改成功!");
            });
        } else {
          pageModelApi.createMsgAddr({ ...values }).then(() => {
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
  }

  public render() {
    const {
      inputs,
      btnList,

      visible,
      detailData
    } = this.state;
    return (
      <div className="page-user-list">
        <SearchForm
          onSearch={this.search}
          inputs={inputs}
          btnList={btnList}
          handleReset={this.handleReset}
        />
        <Panel>
          <Table
            columns={this.columns}
            loading={this.state.loading}
            rowKey={record => record.id}
            scroll={{ x: this.columns.length * 120 }}
            onChange={this.tableChange}
            dataSource={this.state.tableData.data}
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
          title={this.state.title}
          destroyOnClose
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
        queryParams: { pageSize: 10, ...obj, pageNum: 1 }
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
          pageSize: 10,
          pageNum: 1
        }
      },
      () => {
        this.queryInitData();
      }
    );
  };

  //   新增用户
  private addUser() {
    this.setState({
      visible: true,
      title: "新增用户"
    });
  }

  // 编辑用户
  private edit(obj: any) {
    this.setState({
      detailData: obj,
      visible: true,
      title: "修改用户"
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

export default withRouter(PageUserList);
