import http from "../utils/http";

class MonitorApi {

  /**
   * 查询页面访问列表
   */
  public query(req: any) {
    return http.post<any>('/api/0/statistics/countDevice', req,)
  }

  public chart(req: any) {
    return http.post<any>('/api/0/statistics/countAllDeviceOnlineByDay', req)
  }

  //  流量
  public flow(req: any) {
    return http.post<any>('/api/0/statistics/countDeviceFlow', req)
  }

  //  设备数
  public deviceNumber(req: any) {
    return http.post<any>('/api/0/statistics/countDeviceOnlineByDay', req)
  }

}

/**
 * 页面访问 相关api
 */
const monitorApi = new MonitorApi()

export default monitorApi
