class Base {
  // public baseUrl: string = 'http://192.168.30.177:8989/iot-ms/'
  public baseUrl: string = (window as any).BASE_URL; //开发环境
  // public baseUrl: string = 'http://192.168.40.250:6868/iot-ms/' //开发环境
  // // public menuUrl: string = 'http://192.168.30.177:8989/jdrx-ocp/'
  // public menuUrl: string = 'http://192.168.40.250:6868/jdrx-ocp/'
  public authorizationInfo: string =
    sessionStorage.getItem("token") ||
    GetQueryString("token") ||
    getLocalStorage();
}

function GetQueryString(name: string): any {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg); //查询？后面的参数，并匹配正则
  if (r != null) {
    return String(unescape(r[2]));
  } else {
    return null;
  }
}

function getLocalStorage() {
  let token = localStorage.getItem("sass_token");
  if (token) {
    return token.substring(1, token.length - 1);
  } else {
    return null;
  }
}

const baseConfig = new Base();

export default baseConfig;
