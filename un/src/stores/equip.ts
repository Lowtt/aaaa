import {action, observable} from 'mobx'

class AppStore {

  @observable public pageSize: number = 10
  @observable public pageNum: number = 1
  @observable public name: string = ""
  
  @action
  public setnumber(params: any){
    this.pageNum = params.current
    this.pageSize = params.pageSize,
    this.name = params.name
  }

}

const appStore = new AppStore()

export default appStore