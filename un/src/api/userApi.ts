import http from '../utils/http'

class UserApi {

    public login(req:any,config:any) {
        return http.post<any>('/login', req,config)
    }

}

const userApi = new UserApi()

export default userApi
