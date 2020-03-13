import {action, observable} from 'mobx'

class datamodelStore {
 
  @observable public currentButtonStatus: boolean = false
  @observable public refresh: boolean = false

  @observable public pageSize: number = 10
  @observable public pageNum: number = 1
  @observable public name: string = ""
  


  @action
  public setnumber(params: any){
    this.pageNum = params.current||params.pageNum||1
    this.pageSize = params.pageSize,
    this.name = params.name
  }

}

const appStore = new datamodelStore()

export default appStore