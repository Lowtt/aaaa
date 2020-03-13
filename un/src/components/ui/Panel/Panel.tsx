import React, {ReactNode} from 'react'
import './Panel.scss'

const Panel = (props: IPanelProps) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-title">{props.title}</div>
        <div className="panel-choose">{props.choose}</div>
      </div>
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  )
}

interface IPanelProps {
  title?: string | ReactNode
  choose?: string | ReactNode
  tools?: ReactNode
  children: ReactNode
}

export default Panel
