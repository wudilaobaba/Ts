import {AxiosResponse,RequestData} from "../types";

export class AxiosError extends Error{ // message, config, code, request, response
  private isAxiosError:boolean;
  private config:RequestData; // ajax的参数
  private code?:string | null;// 前端定义的错误码
  private request?:any; // 就是 xmlHttpRequest对象
  private response?:AxiosResponse; // 后端响应的数据

  public getIsAxiosError():boolean{
    return this.isAxiosError;
  }
  public getConfig():RequestData{
    return this.config;
  }
  public getCode():any{
    return this.code;
  }
  public getRequest():any{
    return this.request;
  }
  public getResponse():any{
    return this.response;
  }

  constructor(message:string,config:RequestData,code?:string | null,request?:any,response?:AxiosResponse) {
    super(message);
    this.config = config;
    this.code = code;
    this.request = request;
    this.response = response;
    this.isAxiosError = true;
    // 解决ts的一个坑，class继承了内置接口后，实例后无法调用实例方法
    // 解决方式：在构造函数中的super下面加上以下语句：
    Object.setPrototypeOf(this,AxiosError.prototype);
  }
}

export function createError(message:string,config:RequestData,code?:string | null,request?:any,response?:AxiosResponse):AxiosError {
  return new AxiosError(message, config, code, request, response);
}
