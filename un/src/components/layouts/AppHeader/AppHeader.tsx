import React, {Component} from 'react'
import './AppHeader.scss'
import {observer} from 'mobx-react'

@observer
class AppHeader extends Component {
  constructor(props: any) {
    super(props)
  }
  private logOut(){
    sessionStorage.clear()
    localStorage.clear()
    window.location.href = (window as any).LOGOUT_URL
  }

  public render() {
    return (
      <div className="app-header">
        <a className="logo" href="#">授权系统</a>
        <div className="sources"></div>
        {/* <a className="logOut" href="javascript:;" onClick={()=>this.logOut()} title="退出登录">退出</a> */}
      </div>
    )
  }

}

export default AppHeader
