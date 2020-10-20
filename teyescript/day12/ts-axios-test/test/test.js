function xx() {
    return new Promise(function (resolve, reject) {
        var a = false;
        handler(a);
        function handler(type) {
            if (!type) {
                resolve({
                    name: "whj",
                    age: 12,
                    sex: "nan"
                });
                return;
            }
            reject(new Error("WRONG"));
        }
    });
}
xx().then(function (x) {
    console.log(x);
})["catch"](function (e) {
    console.log(e);
});
