import http from "../utils/http";

// 指令下发
class CommandApi {
  //  指令分类
  public queryClassify(req: any) {
    return http.post<any>("api/0/dictionary/selectByDictionary", req);
  }

  // 命令解析方式
  public queryMethodMark() {
    return http.post<any>("/api/0/command/selectCommandMethod");
  }

  //  分页查询
  public queryPageData(req: any) {
    return http.post<any>("/api/0/command/selectByPage", req);
  }

  //  删除
  public delete(req: any) {
    return http.post<any>("/api/0/command/delete", req);
  }

  //  新增
  public create(req: any) {
    return http.post<any>("/api/0/command/create", req);
  }

  //  编辑
  public update(req: any) {
    return http.post<any>("/api/0/command/update", req);
  }

  //  根据指令id查询参数
  public queryParmById(req: any) {
    return http.post<any>("/api/0/command/selectParamsByCommand", req);
  }

  //  根据id查询信息
  public queryDetail(req: any) {
    return http.post<any>("/api/0/command/findById", req);
  }
}

const commandApi = new CommandApi();

export default commandApi;
