import React, {Component} from 'react'
import echarts from 'echarts'
import '../chalk'
import './CommonlyChart.scss'
import '../china.ts'
import elementResizeEvent from 'element-resize-event'
import {Spin} from 'antd';
import _ from 'lodash';

require('echarts/lib/component/tooltip')


class CommonlyChart extends Component<ICommonlyChartProps, ICommonlyChartState> {
  private el: any = null

  constructor(props: ICommonlyChartProps) {
    super(props)
  }

  private chart: any

  public componentDidMount() {
    if (this.el == null) {
      return
    }
    this.chart = echarts.init(this.el, 'chalk')
    if (this.props.option) {
      this.chart.setOption(this.props.option)
    }

    elementResizeEvent(this.el, () => {
      this.chart.resize({ width: this.el.clientWidth, heigth: this.el.clietnHeigth })
    })
  }

  public componentDidUpdate() {
    if (this.el == null) {
      return
    }
    this.chart = echarts.init(this.el, 'chalk')
    if (this.props.option) {
      this.chart.setOption(this.props.option)
    }
  }

  public shouldComponentUpdate(nextProps: any) {
    if (_.isEqual(nextProps.option, this.props.option) && _.isEqual(nextProps.loading, this.props.loading)) {
      return false
    }
    return true
  }

  public componentWillUnmount() {
    if (this.el == null) {
      return
    }
    elementResizeEvent.unbind(this.el, () => { })
  }

  public render() {
    const { option = {} } = this.props;
    // console.log(option)
    // console.log(option) (option.series && option.series.length > 0 && option.series[0].data.length < 1)
    if ((option.xAxis && option.xAxis.data && option.xAxis.data.length < 1) || (option.series && option.series.length > 0 && option.series[0].data.length < 1)) {
      return (
        <div className="commonly-chart-wrapper" style={{ height: this.props.height, color: "#999" }}>
          暂无数据
        </div>
      )
    }
    return (
      <div className="commonly-chart-wrapper" style={{ height: this.props.height }}>
        {this.props.loading && <div className="mask"><Spin></Spin></div>}
        {!this.props.loading && <div className="commonly-chart" ref={el => { this.el = el }} style={{ height: this.props.height }}></div>}
      </div>
    )
  }
}

interface ICommonlyChartProps {
  height: string
  option?: any
  loading?: boolean
}

interface ICommonlyChartState {
}

export default CommonlyChart