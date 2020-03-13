import _ from 'lodash'
import React, {Component, ReactNode} from 'react'
import './AppMenu.scss'
import {Icon, Menu} from 'antd'
import menus, {findMenuByKey, IMenuItem} from '../../../config/menus'
import {RouteComponentProps, withRouter} from 'react-router'

const SubMenu = Menu.SubMenu

class AppMenu extends Component<RouteComponentProps, IAppMenuState> {

    constructor(props: RouteComponentProps) {
        super(props)
        this.menuClick = this.menuClick.bind(this)

        this.state = {
            ...this.setOpenAndSelectMenu()
        }

    }

    public componentWillReceiveProps(nextProps: RouteComponentProps) {
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.setState({
                ...this.setOpenAndSelectMenu()
            })
        }
    }

    public render() {
        return (
            <div className="app-menu">
                <Menu onClick={this.menuClick}
                      mode="inline"
                      defaultSelectedKeys={this.state.selectedKeys}
                      defaultOpenKeys={this.state.openKeys}>
                    {this.buildMenu(menus)}
                </Menu>
            </div>
        )
    }

    protected menuClick(e: any): void {
        let menu = findMenuByKey(e.key)
        if (menu && menu.path) {
            this.props.history.push(menu.path)
        }
    }

    private buildMenu(items: IMenuItem[]) {
        if (items && items.length > 0) {
            let res = []
            for (const item of items) {
                if (item.children && item.children.length > 0) {
                    res.push(
                        <SubMenu key={item.key} title={this.buildMenuTitle(item)}>
                            {
                                this.buildMenu(item.children)
                            }
                        </SubMenu>
                    )
                } else {
                    res.push(<Menu.Item key={item.key}>{this.buildMenuTitle(item)}</Menu.Item>)
                }
            }
            return res
        }
        return null
    }

    private buildMenuTitle(menu: IMenuItem): ReactNode {
        let icon = menu.icon
        if (menu.icon && _.isString(menu.icon)) {
            icon = <Icon type={menu.icon}/>
        }
        return <span>{icon}<span className="name">{menu.name}</span></span>
    }

    private setOpenAndSelectMenu() {
        let path = this.props.location.pathname
        let openKeys: string[] = []
        let selectedKeys: string[] = []
        let recursionMenus = (items: IMenuItem[], parents: string[]): void => {
            for (const item of items) {
                if (item.path && item.path == path) {
                    selectedKeys.push(item.key as string)
                    openKeys = [...parents]
                } else {
                    if (item.children) {
                        parents.push(item.key as string)
                        recursionMenus(item.children, parents)
                        parents.pop()
                    }
                }
            }
        }
        recursionMenus(menus, [])
        return {
            selectedKeys: selectedKeys,
            openKeys: openKeys
        }
    }

}

interface IAppMenuState {
    selectedKeys: string[],
    openKeys: string[]
}

export default withRouter(AppMenu)
