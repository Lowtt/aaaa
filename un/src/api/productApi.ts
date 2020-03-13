import http from "../utils/http";

class ProductApi {
  /**
   * 查询页面产品
   */
  public query(req: any) {
    return http.post<any>("/api/0/product/selectByPage", req);
  }

  /**
   * 删除
   */
  public delete(req: any) {
    return http.post<any>("api/0/product/delete", req);
  }

  // 新增
  public create(req: any) {
    return http.post<any>("api/0/product/create", req);
  }
  // 修改
  public update(req: any) {
    return http.post<any>("api/0/product/update", req);
  }

  // 发布
  public release(req: any, url: string) {
    return http.post<any>("api/0/product/" + url, req);
  }

  // 下拉框
  public selectByDictionary(req: any) {
    return http.post<any>("/api/0/dictionary/selectByDictionary", req);
  }

  // 创建模型选择方法
  public selectMethod(req: any) {
    return http.post<any>("api/0/settingModel/selectExecuteMethod", req);
  }
  //
  public dataModel(req: any) {
    return http.post<any>("/api/0/data-model/selectByPage", req);
  }

  // 产品信息
  public detail(req: any) {
    return http.post<any>("/api/0/product/findById", req);
  }

  // 查询所有属性
  public queryAttr(req: any) {
    return http.post<any>("/api/0/attribute/selectByPage", req);
  }

  //  指令分页查询
  public queryCommandData(req: any) {
    return http.post<any>("/api/0/command/selectByPage", req);
  }
  //  产品指令分页查询
  public queryCommandByPage(req: any) {
    return http.post<any>("/api/0/product/selectCommand", req);
  }
  //  产品指令新增
  public addCommand(req: any) {
    return http.post<any>("/api/0/product/addCommand", req);
  }
  //  产品指令删除
  public deleteCommand(req: any) {
    return http.post<any>("/api/0/product/delCommand", req);
  }

  public queryAttrByPage(req: any) {
    return http.post<any>("/api/0/product/selectAttribute", req);
  }

  // 添加属性
  public addAttr(req: any) {
    return http.post<any>("/api/0/product/addAttribute", req);
  }

  // 删除属性
  public deleteAttr(req: any) {
    return http.post<any>("/api/0/product/delAttribute", req);
  }

  public selectDeviceModelById(req: any) {
    return http.post<any>("/api/0/data-model/selectDeviceModelById", req);
  }

  public deleteModelAttr(req: any) {
    return http.post<any>("/api/0/data-model/deleteModelAttr", req);
  }

  /**
   * 查询页面下拉框
   */
  public byClassify(req: any) {
    return http.post<any>("api/0/dictionary/selectByClassify", req);
  }

  /**
   * 页面
   */
  public export() {
    return "/pageview/page_list_export";
  }
}

/**
 * 页面访问 相关api
 */
const productApi = new ProductApi();

export default productApi;
