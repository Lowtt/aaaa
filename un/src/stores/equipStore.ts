import {action, observable} from 'mobx'

class equipStore {
 
  @observable public currentButtonStatus: boolean = false
  @observable public refresh: boolean = false

  @observable public pageSize: number = 10
  @observable public pageNum: number = 1
  @observable public name: string = ""
  @observable public sn: string = ""
  @observable public dataStatus: number | string = ""
  


  @action
  public setnumber(params: any){
    this.pageNum = params.current||params.pageNum
    this.pageSize = params.pageSize,
    this.name = params.name,
    this.sn = params.sn,
    this.dataStatus = params.dataStatus
  }

}

const appStore = new equipStore()

export default appStore