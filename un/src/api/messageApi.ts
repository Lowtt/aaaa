import http from "../utils/http";

class MessageApi {
  //  查询信息类型(通过字典sendAddrType)
  public queryMsgType(req: any) {
    return http.post<any>("/api/0/dictionary/selectByPage", req);
  }

  //  查询信息地址
  public queryMsgAddr(req: any) {
    return http.post<any>("/api/0/msgAddr/findMsgAddr", req);
  }

  //删除信息地址
  public deleteMsgAddr(req: any) {
    return http.post<any>("/api/0/msgAddr/delete", req);
  }

  //  更新信息地址
  public updateMsgAddr(req: any) {
    return http.post<any>("/api/0/msgAddr/update", req);
  }

  //  新建信息地址
  public createMsgAddr(req: any) {
    return http.post<any>("/api/0/msgAddr/create", req);
  }

  //  查询信息类型
  public findMsgType(req: any) {
    return http.post<any>("/api/0/msgType/findMsgType", req);
  }

  //  绑定信息类型
  public bindMsgType(req: any) {
    return http.post<any>("/api/0/msgType/bindTypeAddr", req);
  }

  //  查询已绑定信息类型
  public queryBindedType(req: any) {
    return http.post<any>("/api/0/msgType/findMsgTypeByAddrId", req);
  }

  //  删除信息类型
  public deleteMsgType(req: any) {
    return http.post<any>("/api/0/msgType/delete", req);
  }
  //  创建信息类型
  public createMsgType(req: any) {
    return http.post<any>("/api/0/msgType/create", req);
  }
  //  修改信息类型
  public updateMsgType(req: any) {
    return http.post<any>("/api/0/msgType/update", req);
  }

  //  查询信息记录
  public queryMsgRecord(req: any) {
    return http.post<any>("/api/0/msgType/findMsgRecord", req);
  }
}

const messageApi = new MessageApi();

export default messageApi;
