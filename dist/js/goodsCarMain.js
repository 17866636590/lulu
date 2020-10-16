console.log("加载成功!Car");
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "index": "index",
        "select": "select",
        "goodsDetail":"goodsDetail",
        "goodsCar":"goodsCar"
    },
    shim: {
        "jquery-cookie": ["jquery"],
    }
})
require(["index", "select","goodsCar"], function (index, select,goodsCar) {
    index.slideshow();
    select.selectCard1();
    select.selectCard2();
    select.selectCard3();
    select.selectCard4();
    select.goods();
    goodsCar.goodsCarContent();
    goodsCar.goodsCarDelete();
    goodsCar.goodsCarNum();
    goodsCar.goodsCarTotal();
})