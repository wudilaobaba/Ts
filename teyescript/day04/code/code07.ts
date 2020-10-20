class Control{
  private state:any;
}
interface Select extends Control{ //接口可以继承类
  select();
}
class Button extends Control implements Select{
  select() {
  }
}
class TextBox extends Control{

}

class ImageCx implements Select{
  private state: any;
  select() {
  }
}