import http from "../utils/http";

class PageDictionaryApi {

  /**
   * 查询页面访问列表
   */
  public query(req: any) {
    return http.post<any>('api/0/dictionary/selectByPage', req)
  }

  /**
  * 查询页面访问列表
  */
  public delete(req: any) {
    return http.post<any>('api/0/dictionary/delete', req)
  }
  /*
    * 查询页面访问列表
    */
  public create(req: any) {
    return http.post<any>('api/0/dictionary/create', req)
  }
  /*
    * 查询页面访问列表
    */
  public update(req: any) {
    return http.post<any>('api/0/dictionary/update', req)
  }

  /**
  * 查询页面下拉框
  */
  public byClassify(req: any) {
    return http.post<any>('api/0/dictionary/selectByClassify', req)
  }

  /**
   * 导出
   */
  public export() {
    return '/pageview/page_list_export'
  }

  // 通信日志查询
  public queryInfoRecord(req:any) {
    return  http.post<any>('/api/0/communication-log/selectByPage',req)
  }
}

/**
 * 页面访问 相关api
 */
const pageDictionaryApi = new PageDictionaryApi()

export default pageDictionaryApi
