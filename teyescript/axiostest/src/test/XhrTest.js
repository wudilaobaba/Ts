export default function xhr(){
  const request = new XMLHttpRequest();
  let method = "GET".toUpperCase();
  let url = "http://localhost:8599/v1/banner/all?names=Tom";
  let async = true;
  let data = {};

  request.open(method,url,async);
  request.send(data);
}
