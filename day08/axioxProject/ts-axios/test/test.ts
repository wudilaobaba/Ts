import axiox from "../src/whj-axios";
import {AxiosRequestConfig} from "../src/types"
function ts() {
  let config:AxiosRequestConfig = {
    url:"",
    method:"get",
    data:null,
    params:{
      string:"Mike",
      list:["sad",{sex:"男"}],
      date:new Date()
    }
  };
  axiox(config);
}
ts();
