"use strict";
exports.__esModule = true;
var src_1 = require("../src");
function ts() {
    var config = {
        url: "",
        method: "get",
        data: null,
        params: {
            string: "Mike",
            list: ["sad", { sex: "男" }],
            date: new Date()
        }
    };
    src_1["default"](config);
}
ts();
