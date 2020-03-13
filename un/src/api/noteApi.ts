import http from "../utils/http";

class NoteApi {

  /**
   * 查询页面访问列表
   */
  public query(req: any) {
    return http.post<any>('/api/0/command-record/selectByPage', req)
  }

  // 查找设备配置内容
  public selectDeviceCmd(req: any) {
    return http.post<any>("/api/0/settingModel/selectSettingAttrById", req);
  }

  // 设备配置指令详情
  public cmdDetail(req: any) {
    return http.post<any>("/api/0/commandHandle/selectById", req);
  }

  // 新增
  public create(req: any) {
    return http.post<any>('api/0/commandRecord/create', req)
  }
  // 修改
  public update(req: any) {
    return http.post<any>('api/0/commandRecord/update', req)
  }

  // 修改
  public detail(req: any) {
    return http.post<any>('api/0/commandRecord/findById', req)
  }

  /**
  * 查询页面下拉框
  */
  public byClassify(req: any) {
    return http.post<any>('api/0/dictionary/selectByClassify', req)
  }
}

/**
 * 页面访问 相关api
 */
const noteApi = new NoteApi()

export default noteApi
