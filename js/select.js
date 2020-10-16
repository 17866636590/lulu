define(["jquery","jquery-cookie"], function ($) {
    function selectCard1() {
        $("#header-r .list").on("mouseenter", ".item", function () {
            $(this).addClass("active1");
            var i = $(this).index();
            // console.log(i)
            $(".card1").css({
                display: 'none'
            })
            $(".card1").eq(i).css("display", "block");
        })
        $("#header-r .list").on("mouseleave", ".item", function () {
            $(this).removeClass("active1");
        })
        $(".list").mouseleave(function () {
            $(".card1").css({
                display: "none"
            })
        })

    }

    function selectCard2() {
        $("#aside-list").on("mouseenter", ".list-nav", function () {
            $(this).addClass("act");
            var m = $(this).index();
            console.log(m)

            $(".list-nav").find(".aside-txt1").css({
                display: 'none'
            })
            $(".list-nav").find(".aside-txt1").eq(m).css("display", "block")
        })
        $("#aside-list").on("mouseleave", ".list-nav", function () {
            $(this).removeClass("act");
        })
        $("#aside-list").mouseleave(function () {
            $(".aside-txt1").css({
                display: "none"
            })


        })

    }
    function selectCard3() {
        $(".xuan-list").on("mouseenter", "li", function () {
            var x = $(this).index();
            // alert(x)
            $(".xuan-list").find(".xuan-txt").css({
                display: 'none'
            })
            
            $(".xuan-list").find(".xuan-txt").eq(x).css("display", "block")
        })    
        
        $(".xuan-txt").mouseleave(function () {
            $(this).css({
                display: "none"
            })
        })

    }
    function selectCard4() {
        $(".detail-li").on("mouseenter", ".detail-btn", function () {
            $(this).addClass("detail-act").siblings(".detail-btn").removeClass("detail-act")
            var y = $(this).index();
            $(".detail-pic").find(".pic-content").eq(y).css("display", "block").siblings("li").css("display","none")
        })    

    }
    function goods(){
    $.ajax({
        url:'./../data/data.json',
        success:function(arr){
            // console.log(arr)
            for(i=0;i<arr.length;i++){
                $(` <li>
                <a target="blank" href="goodsDetails.html?product_id=${arr[i].id}">
                    <img src=${arr[i].img}/>
                    <div class="message">
                        <span class="price-new">${arr[i].priceNew}</span>
                        <span class="price-old">${arr[i].priceOld}<i class="tag-pro">PRO</i></span>
                            <span class="commt">评价<em>${arr[i].span2}</em></span>
                    </div>
                    <a href="javascript:"class="fn">
                    ${arr[i].title}
                    </a>
                    <div class="sell_point">${arr[i].letter}</div>
                    <div class="self_tag">自营</div>
                    <div class="fo">
                        <div class="fo-l fl">
                            <span class="iconfont icon-gouwuche1"></span>
                            <span>购物车</span>
                        </div>
                    <div class="fo-r fr">
                        <span class="iconfont icon-duibi"></span>
                        <span>对比</span>
                    </div>
                    </div>
                    <div class="bing-pro">
                        <span class="pro-l">PRO精选</span>
                        <span class="pro-r">限时特惠</span>
                    </div>
                 </a>
            </li>`).appendTo('.refrigerator-list')
            }
        }
    })
    }
   
    return {
        selectCard1,
        selectCard2,
        selectCard3,
        selectCard4,
        goods,
    }
})