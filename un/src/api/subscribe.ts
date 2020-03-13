import http from "../utils/http";

class SubscribeApi {

  /**
   * 查询页面访问列表
   */
  public query(req: any) {
    return http.post<any>('/api/0/subscribe/selectByPage', req)
  }

  /**
  * 查询页面访问列表
  */
  public delete(req: any) {
    return http.post<any>('/api/0/subscribe/delete', req)
  }

  // 新增
  public create(req: any) {
    return http.post<any>('api/0/subscribe/create', req)
  }
  // 修改
  public update(req: any) {
    return http.post<any>('api/0/subscribe/update', req)
  }

  // 发布 
  public release(req: any,url: string) {
    return http.post<any>('api/0/product/'+url, req)
  }

  // 下拉框
  public selectByDictionary(req: any) {
    return http.post<any>('/api/0/dictionary/selectByDictionary', req)
  }

  // 
  public dataModel(req: any) {
    return http.post<any>('/api/0/data-model/selectByPage', req)
  }

  public detail(req: any) {
    return http.post<any>('/api/0/subscribe/findById', req)
  }
}

/**
 * 页面访问 相关api
 */
const subscribeApi = new SubscribeApi()

export default subscribeApi
