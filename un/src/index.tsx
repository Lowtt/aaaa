import React from 'react'
import ReactDOM from 'react-dom'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import 'antd/dist/antd.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {LocaleProvider} from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn');

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
