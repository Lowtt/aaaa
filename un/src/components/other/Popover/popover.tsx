import React from 'react'
import {Popover} from "antd"

const popoverStr = (text: string) => {
    if (text) {
        let textStr = `${text}`
        return (textStr.length < 10 ? textStr : <Popover content= { textStr } trigger = "hover" >
            { textStr.slice(0, 9) }...
        </Popover>)
    } else {
        return "-"
    }
}

export default popoverStr