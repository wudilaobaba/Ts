import React, {
  PureComponent,
  Fragment
} from 'react'
import xhr from "./XhrTest";
import axiox from "whj-axios"
class TestDom extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
        <Fragment>
          首页123
        </Fragment>
    )
  }

  componentDidMount() {
    let config = {
      url:"http://localhost:8599/v1/banner/all",
      method:"post",
      data:["1","2","3"],//{name:"Mike",age:12,sex:"男"},
      headers:null,//  content-type大小写随便写
      params:{
        name:"张三",
        hobbies:["邹秋","篮球"]
      }
    };
    // axiox(config);

    //测试表单提交：
    /**
     * 测试表单提交
     * 不要写@RequestBody
     *  前端data传：let form = new URLSearchParams("name='王泓钧'&age=12&sex='男'");
     */
    //后端：不加@RequestBody
  // @RequestMapping(value = "/form",method = {RequestMethod.POST})
  //   public User test02(
  //       User user
  // ){
  //     return user;
  //   }
    let form = new URLSearchParams("name='王泓钧'&age=12&sex='男'");
    let config1 = {
      //header不需要自己传递，浏览器默认选择表单提交的"Content-type": "application/x-www-form-urlencoded;charset=utf-8"
      url:"http://localhost:8599/v1/banner/form",
      data:form,
      method: "post"
    };
    axiox(config1).then((data)=>{
      console.log(data);
    })
  }
}
export default TestDom
