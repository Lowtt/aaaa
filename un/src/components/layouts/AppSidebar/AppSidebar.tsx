import React, {Component} from 'react'
import './AppSidebar.scss'
import AppMenu from '../AppMenu/AppMenu'

class AppSidebar extends Component {
  render() {
    return (
      <div className="app-sidebar">
        <AppMenu />
      </div>
    )
  }
}

export default AppSidebar