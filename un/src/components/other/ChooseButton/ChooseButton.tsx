import React, {Component} from 'react'
import './ChooseButton.scss'
import {Button} from 'antd'


class ChooseButton extends Component<{}, IChooseButtonState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isShow: false
    }
  }
  public render() {
    return (
      <Button className="btn-export" size="small" icon={this.state.isShow ? "up" : "download"}>{}</Button>
    )
  }
}

interface IChooseButtonState {
  isShow: boolean
}

export default ChooseButton