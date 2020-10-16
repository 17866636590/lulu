//遵从AMD规范
define(["jquery"], function ($) {
    function slideshow() {
        $(function () {
            var oBtn = $("#play").find("ol li");
            var oUl = $("#play").find("ul");
            var oArrows = $("#play").find(".arrows a");
            console.log(oArrows.eq(0))
            var iNow = 1;
            var timer = null;
            let isRunning = false;
            oBtn.click(function () {
                iNow = $(this).index() + 1;
                // console.log(1)
                tab();
            })
            oBtn.mouseenter(function () {
                iNow = $(this).index() + 1;
                // console.log(1)
                tab();
            })
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 2000);
            $("#play").mouseenter(function () {
                clearInterval(timer);
            })
            $("#play").mouseleave(function () {
                timer = setInterval(function () {
                    iNow++;
                    tab();
                }, 2000);
            })

            function tab() {

                oBtn.removeClass("active").eq(iNow - 1).addClass("active");

                if (iNow == oBtn.size() + 1) {
                    oBtn.eq(0).addClass("active");
                }
                isRunning = true;
                oUl.animate({
                    left: iNow * -1200
                }, 500, function () {
                    if (iNow == oBtn.size() + 1) {
                        iNow = 1;
                        oUl.css({
                            left: iNow * -1200
                        })
                    } else if (iNow == 0) {
                        iNow = 6
                        oUl.css({
                            left: iNow * -1200
                        })

                    }
                    isRunning = false;
                })

            }
            oArrows.eq(0).click(function () {
                if (!isRunning) {
                    iNow--;
                    tab();
                    return false //清除超链接的默认行为，（点击刷新）
                }

            })
            oArrows.eq(1).click(function () {
                if (!isRunning) {
                    iNow++
                    tab()
                    return false
                }
            })

        })
    }
    function backtop() {
        var footer = document.getElementById('xuan-txt')
        window.onscroll = function () {
            var distance = document.body.scrollTop || document.documentElement.scrollTop
            footer.onclick = function () {
                var timer1 = setInterval(function () {
                    document.body.scrollTop -= 800
                    document.documentElement.scrollTop -= 800
                    var s1 = document.documentElement.scrollTop
                    var s2 = document.body.scrollTop
                    if (s1 == 0 && s2 == 0) {
                        clearInterval(timer1)
                    }
                }, 10);
            }
        }
    }
    return {
        slideshow,
        backtop
    }
})