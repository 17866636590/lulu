console.log("加载成功!Detail");
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
require(["index", "select","goodsDetail","goodsCar"], function (index, select, goodsDetail,goodsCar) {
    index.slideshow();
    select.selectCard1();
    select.selectCard2();
    select.selectCard3();
    select.selectCard4();
    select.goods();
    goodsDetail.glassPic();
    goodsDetail.download();
    goodsCar.goodsCarTotal();
})