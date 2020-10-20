import {AxiosPromise, RequestData,Method,Axios} from "../types/index"
import {axios} from "../axios"
export default class WhjAxios implements Axios{
  // 原始ajax
  public request(config:RequestData):AxiosPromise{
    return axios(config);
  }

  // 不传body体的场景
  public get(url:string,config?:RequestData):AxiosPromise{
    return this.requestMethodWithoutData("get",url,config);
  }
  public delete(url:string,config?:RequestData):AxiosPromise{
    return this.requestMethodWithoutData("delete",url,config);
  }
  public head(url:string,config?:RequestData):AxiosPromise{
    return this.requestMethodWithoutData("head",url,config);
  }
  public options(url:string,config?:RequestData):AxiosPromise{
    return this.requestMethodWithoutData("options",url,config);
  }

  // 传body体的场景
  public post(url:string,data?:any,config?:RequestData):AxiosPromise{
    return this.requestMethodWithData("post",url,data,config);
  }
  public put(url:string,data?:any,config?:RequestData):AxiosPromise{
    return this.requestMethodWithData("put",url,data,config);
  }
  public patch(url:string,data?:any,config?:RequestData):AxiosPromise{
    return this.requestMethodWithData("patch",url,data,config);
  }

  private requestMethodWithoutData(method:Method,url:string,config?:RequestData):AxiosPromise{
    return this.request(Object.assign(config||{},{
      method,
      url
    }));
  }

  private requestMethodWithData(method:Method,url:string,data?:any,config?:RequestData):AxiosPromise{
    return this.request(Object.assign(config||{},{
      method,
      url,
      data
    }));
  }
}

