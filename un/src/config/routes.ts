import { RouteProps } from "react-router";
import { lazy } from "react";

let routes: IRouteItem[] = [
  {
    path: "/user-list", // 用户列表
    view: "user/userList"
  },
  {
    path: "/auth-list", // 授权列表
    view: "authManage/authList"
  },
  {
    path: "/auth_record", // 授权记录
    view: "authManage/authRecord"
  }
];

interface IRouteItem extends RouteProps {
  view?: string;
}

for (const item of routes) {
  if (item.view) {
    item.component = lazy(() => import(("../views/" + item.view) as string));
  }
}

export default routes;
