import http from "../utils/http";

class PageModelApi {

  /**
   * 查询属性分页
   */
  public query(req: any) {
    return http.post<any>('/api/0/attribute/selectByPage', req)
  }

   /**
   * 查询页面访问列表
   */
  public delete(req: any) {
    return http.post<any>('/api/0/attribute/delete', req)
  }

   /**
   * 查询页面访问列表
   */
  public create(req: any) {
    return http.post<any>('api/0/data-model/create', req)
  }
  
   /**
   * 查询模型详情
   */
  public detail(req: any) {
    return http.post<any>('api/0/data-model/findById', req)
  }


  /**
   * 创建属性
   */
  public createAttr(req: any) {
    return http.post<any>('/api/0/attribute/create', req)
  }

  
// 下拉框
public selectByDictionary(req: any) {
  return http.post<any>('/api/0/dictionary/selectByDictionary', req)
}

  public selectByModel(req:any) {
    return http.post<any>('api/0/data-model/selectByModel', req)
  }

  /**
   * 页面
   */
  public selectDevice(req:any) {
    return http.post<any>('api/0/device/selectByProduct', req)
  }

  /**
   * 编辑属性
   */
  public update(req:any) {
    return http.post<any>('/api/0/attribute/update', req)
  }
}

/**
 * 页面访问 相关api
 */
const pageModelApi = new PageModelApi()

export default pageModelApi
