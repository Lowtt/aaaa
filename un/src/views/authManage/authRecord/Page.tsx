import React, { Component } from "react";
import "./Page.scss";
import { Panel } from "../../../components/ui";
import { RouteComponentProps, withRouter } from "react-router";
import { SearchForm } from "../../../components/other/SearchForm";
import { Table } from "antd";
import { ColumnProps, PaginationConfig } from "antd/lib/table";
import pageModelApi from "../../../api/messageApi";
import moment from "moment";
import popover from "../../../components/other/Popover";
const sendStatusName = ["发送成功", "发送中", "发送失败"];
class PageVisit extends Component<IAllTrendProps, any> {
  myRef: any;
  private columns: ColumnProps<IData>[] = [
    {
      title: "信息类型",
      key: "typeName",
      dataIndex: "typeName",
      align: "center"
    },
    {
      title: "接收地址",
      key: "addr",
      dataIndex: "addr",
      align: "center"
    },

    {
      title: "地址类型",
      key: "addrType",
      dataIndex: "addrType",
      align: "center"
    },
    {
      title: "信息主题",
      key: "topic",
      dataIndex: "topic",
      align: "center",
      render: popover
    },
    {
      title: "发送内容",
      key: "sendContent",
      dataIndex: "sendContent",
      align: "center",
      render: popover
    },
    {
      title: "发送状态",
      key: "sendStatus",
      dataIndex: "sendStatus",
      align: "center",
      render: text => text && sendStatusName[text - 1]
    },
    {
      title: "发送时间",
      key: "sendTime",
      dataIndex: "sendTime",
      align: "center",
      fixed: "right",
      width: 200,
      render: text => (text ? moment(text).format("YYYY-MM-DD HH:mm:ss") : "-")
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
          label: "信息地址",
          keyword: "addr"
        }
      ],
      selects: [
        {
          label: "发送状态",
          keyword: "sendStatus",
          options: [
            {
              disName: "发送成功",
              id: 1
            },
            {
              disName: "发送中",
              id: 2
            },
            {
              disName: "发送失败",
              id: 3
            }
          ]
        },
        {
          label: "信息类型",
          keyword: "msgType",
          options: []
        }
      ]
    };
    this.myRef = React.createRef();
  }

  public componentDidMount() {
    this.fetchData();
    this.getAllMsgType();
  }

  //   页面数据
  private fetchData() {
    this.setState({ loading: true }, () => {
      pageModelApi.queryMsgRecord(this.state.queryParams).then(res => {
        this.setState({ loading: false, tableData: res.data.data });
      });
    });
  }

  // 获取所有信息类型
  private getAllMsgType() {
    pageModelApi.queryMsgType({ pageNum: 1, key: "msgType" }).then(res => {
      let data = res.data.data;
      let selects = this.state.selects;
      data &&
        data.data.map((item: any) => {
          item.id = item.val;
        });
      selects[1].options = data.data;
      this.setState({ selects });
    });
  }

  public render() {
    const { inputs, btnList, selects } = this.state;
    return (
      <div className="page-msg-addr">
        <SearchForm
          onSearch={this.search}
          inputs={inputs}
          btnList={btnList}
          selects={selects}
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
              total: this.state.tableData.total,
              showQuickJumper: true,
              showSizeChanger: true,
              showTotal: () => <span>共{this.state.tableData.total}条</span>
            }}
          />
        </Panel>
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
        this.fetchData();
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
        this.fetchData();
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
        this.fetchData();
      }
    );
  };
}

interface IAllTrendProps extends RouteComponentProps {}

interface IData {
  date: string;
  number: number;
  proportion: number;
  id: string;
}

export default withRouter(PageVisit);
