//类型定义
export type Method = 'get'|'GET'|'delete'|'DELETE'|'head'|'HEAD'|'options'|'OPTIONS'|'post'|'POST'|'put'|'PUT'|'patch'|'PATCH';

export interface AxiosRequestConfig {
  url:string;
  method?:Method;
  data?:any; /*body体中的参数*/
  headers?:any;/*请求头： 如果headers为undefiend，那么根据data进行设置；否则就是原始headers*/
  params?:any; /*url上的参数 - 其实params就是一个对象/null/undifiend*/

  //headers按照以下进行设置
  // {
    // Cookie', 'mycookie=cookie'
    // Accept-Encoding: gzip, deflate, br
    // Accept-Language: zh-CN,zh;q=0.9
    // Connection: keep-alive
    // Content-Length: 5
    // Content-Type: text/plain;charset=UTF-8
    // Host: localhost:8599
    // Origin: http://localhost:3000
    // Referer: http://localhost:3000/
    // Sec-Fetch-Dest: empty
    // Sec-Fetch-Mode: cors
    // Sec-Fetch-Site: same-site
    // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36
  //}
}


