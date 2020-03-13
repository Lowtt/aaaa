import http from "../utils/http";

class exportApi {

  /**
   * 导入
   */
  public import(req: any) {
    return http.post<any>('/api/0/attribute/importAttribute', req)
  }

  /**
   * 下载
   */
  public downloadTemplate(req: any) {
    return http.post<any>('/api/0/attribute/getAttrTemplate', req)
  }
 
 
}

/**
 * 页面访问 相关api
 */
const ExportApi = new exportApi()

export default ExportApi
