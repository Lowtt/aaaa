import http from '../utils/http'

class BaseApi {
 /**
 * 基本的api
 * 获取菜单树
 */
  public queryUserMenuForTree(req:any) {
    return http.post<any>('/api/0/user/queryUserMenuForTree',req)
  }

}

/**
 * 基本的api
 */
const baseApi = new BaseApi()

export default baseApi

export interface IProject {
  projectId: number
  projectName: string
}