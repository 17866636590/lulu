console.log("加载成功!");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "index": "index",
        "select": "select",
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})
require(["index", "select"], function (index, select) {
    index.slideshow();
    select.selectCard1();
    select.selectCard2();
    select.selectCard3();
    select.selectCard4();
    select.goods();
    index.backtop();
})