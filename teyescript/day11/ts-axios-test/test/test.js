function xx() {
    return new Promise(function (resolve) {
        resolve({
            name: "whj",
            age: 12,
            sex: "nan"
        });
    });
}
xx().then(function (x) {
    console.log(x);
});
