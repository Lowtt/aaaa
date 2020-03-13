import React, {Component, Fragment, Suspense} from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {hot} from "react-hot-loader/root";
import "./app.scss";
import routes from "./config/routes";
import AppHeader from "./components/layouts/AppHeader";
import AppSidebar from "./components/layouts/AppSidebar";
import {Spin} from "antd";
import {observer} from "mobx-react";

@observer
class App extends Component {
  public componentDidMount() {
    setTimeout(() => {
      let loader = document.getElementById("loader");
      if (loader) {
        loader.remove();
      }
    }, 1000);
  }

  public render() {
    return (
      <HashRouter>
        <Switch>
          <Fragment>
            <div className="app">
              <AppHeader />
              <div className="app-body">
                <AppSidebar />
                <div className="app-main">
                  <Suspense fallback={<Spin className="page-spin"></Spin>}>
                    <Switch>
                      {routes.map((route, i) => {
                        return <Route key={i} {...route} />;
                      })}
                      <Redirect path="/" to={{ pathname: "/user-list" }} />
                    </Switch>
                  </Suspense>
                </div>
              </div>
            </div>
          </Fragment>
        </Switch>
      </HashRouter>
    );
  }
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
