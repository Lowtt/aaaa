import http from "../utils/http";

class DeviceApi {
  /**
   * 查询页面访问列表
   */
  public query(req: any) {
    return http.post<any>("api/0/device/selectByPage", req);
  }

  // 删除设备
  public delete(req: any) {
    return http.post<any>("api/0/device/delete", req);
  }

  // 删除子设备
  public deleteSonDev(req: any) {
    return http.post<any>("api/0/device/deleteSonDevice", req);
  }

  // 新增
  public create(req: any) {
    return http.post<any>("api/0/device/create", req);
  }

  // 修改
  public update(req: any) {
    return http.post<any>("api/0/device/update", req); 
  }

  // 详情
  public detail(req: any) {
    return http.post<any>("api/0/device/findById", req);
  }

  // 根据产品ID查询设备
  public queryDevByProductId(req: any) {
    return http.post<any>("api/0/device/selectDeviceByProId", req);
  }

  // 创建子设备
  public createSonDev(req: any) {
    return http.post<any>("api/0/device/saveSonDevice", req);
  }

  // 查找子设备
  public querySonDev(req: any) {
    return http.post<any>("api/0/device/selectSonByPage", req);
  }

  // 所有产品
  public selectAll(req: any) {
    return http.post<any>("api/0/product/selectAll", req);
  }

  // 激活禁用
  public prohibitActive(req: any, url: string) {
    return http.post<any>("api/0/device/" + url, req);
  }

  // 设备类型(所有)
  public devType(req: any) {
    return http.post<any>("api/0/device-type/selectAll", req);
  }


  // 设备类型(分页)
  public queryDevType(req: any) {
    return http.post<any>("/api/0/device-type/selectByPage", req);
  }

  // 删除设备类型(id)
  public deleteDevType(req: any) {
    return http.post<any>("/api/0/device-type/delete", req);
  }

  // 创建设备类型
  public createDevType(req: any) {
    return http.post<any>("/api/0/device-type/create", req);
  }

  // 编辑设备类型
  public updateDevType(req: any) {
    return http.post<any>("/api/0/device-type/update", req);
  }

  // 获取设备属性详情
  public selectAttrModelById(req: any) {
    return http.post<any>("/api/0/data-model/selectAttrModelById", req);
  }

  // 获取设备配置详情
  // public selectSettingModelById(req: any) {
  //   return http.post<any>("/api/0/setting-model/selectSettingModelById", req);
  // }

  // 查找设备配置内容
  public selectDeviceCmd(req: any) {
    return http.post<any>("/api/0/settingModel/selectSettingAttrById", req);
  }

  // 恢复设备配置默认值
  public default(req: any) {
    return http.post<any>("/api/0/commandHandle/restoreDefaultsByDevId", req);
  }

  // 获取设备配置字段详情
  public getDeviceDetail(req: any) {
    return http.post<any>(
      "/api/0/commandHandle/selectLastestCommandRecordByDevId",
      req
    );
  }

  // 设备配置指令保存
  public saveDeviceCommand(req: any) {
    return http.post<any>("/api/0/commandHandle/create", req);
  }

  //  指令分页查询
  public queryCommandData(req: any) {
    return http.post<any>("/api/0/product/selectCommand", req);
  }
  //  根据指令id查询参数
  public queryParamsByCommand(req: any) {
    return http.post<any>("/api/0/command/selectParamsByCommand", req);
  }
  //  指令下发
  public putCommand(req: any) {
    return http.post<any>("/api/0/command/put", req);
  }

  // 设备配置指令下发结果
  public cmdSendResult(req: any) {
    return http.post<any>("/api/0/commandHandle/getCommandDownStatus", req);
  }


  // 设备配置指令记录查询
  public selectCmdRecords(req: any) {
    return http.post<any>("/api/0/command-record/selectByPage", req);
  }

  // 设备配置指令详情
  public cmdDetail(req: any) {
    return http.post<any>("/api/0/commandHandle/selectById", req);
  }

  // 获取设备数据
  public selectDeviceData(req: any) {
    return http.post<any>("/api/0/device/selectDeviceData", req);
  }

  // 获取设备数据模型属性信息
  public selectDeviceAttribute(req: any) {
    return http.post<any>("/api/0/data-model/selectByModel", req);
  }

  // 获取设备数据模型属性信息
  public selectModelAttribute(req: any) {
    return http.post<any>(
      "/api/0/deviceAttribute/selectDeviceModelAttribute",
      req
    );
  }

  /**
   * 查询页面下拉框
   */
  public byClassify(req: any) {
    return http.post<any>("api/0/dictionary/selectByClassify", req);
  }
}

/**
 * 页面访问 相关api
 */
const device = new DeviceApi();

export default device;
