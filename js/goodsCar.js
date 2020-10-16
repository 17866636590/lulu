define(["jquery","jquery-cookie"], function ($) {
    function goodsCarContent(){
        var cookieStr=$.cookie("goods");
        if(!cookieStr){
            return;
        }
        //下载对应数据
        
        $.ajax({
            url:"../data/data.json",
            success:function(arr){
                var cookieArr=JSON.parse(cookieStr);
                var newArr=[];
                for(var i=0;i<arr.length;i++){
                    for(var j=0;j<cookieArr.length;j++){
                        if(cookieArr[j].id == arr[i].id){
                            arr[i].num=cookieArr[j].num;
                            newArr.push(arr[i]);
                            break;
                        }
                    }
                }

                for(i=0;i<newArr.length;i++){
var x=parseInt(newArr[i].priceOld.split('¥')[1])
// console.log(x)
                    $(`<div class="item-list" id="${newArr[i].id}">
                    <div class="item-bot">
                        <ul class="goodsItem-list">
                            <li class="w1">
                            <input class="fl box" type="checkbox"/>
                            <div class="pro-pic fl"><img src=${newArr[i].img}/></div>
                            <div class="product-tit fl">${newArr[i].title}</div>
                            </li>
                            <li>
                                <div class="product-color"> ${newArr[i].color}</div>
                                <div class="product-spe">${newArr[i].type}</div>
                            </li>
                            <li>
                                <div class="product-old"><del><b>${newArr[i].priceNew}</b></del></div>
                                <div class="product-new"><b class="bold">${newArr[i].priceOld}</b></div>
                                <div class="product-active">更多活动</div>
                            </li>
                            <li>
                                <div class="product-jian button-car">-</div>
                                <div class="product-num">${newArr[i].num}</div>
                                <div class="product-jian button-car">+</div>
                            </li>
                            <li>
                                <div class="product-total"><b class="bold1">¥${newArr[i].num*x}.00</b></div>
                            </li>
                            <li class="w2">
                                <div class="product-collect">移入收藏夹</div>
                                <div class="product-delete"><b>删除</b></div>
                            </li>
                        </ul>
                    </div>
                </div>`).appendTo(".insertCont")
                }
               

            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    function goodsCarDelete(){
        $(".insertCont").on("click",".product-delete",function(){
            var id=$(this).closest(".item-list").remove().attr("id");//获取此按钮的第一个父元素的id,并赋值给id remove()在页面删除
            var cookieArr=JSON.parse($.cookie("goods"));
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].id==id){
                     cookieArr.splice(i,1);
                    break;
                }
            }
            if(cookieArr.length){
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }else{
                $.cookie("goods",null);
            }
        })
    }
    function goodsCarNum(){
        $(".insertCont").on("click",".button-car",function(){
            var id=$(this).closest(".item-list").attr("id");
            var cookieArr=JSON.parse($.cookie("goods"));
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].id==id){
                    break;
                }
            }
            if(this.innerHTML=="+"){
                cookieArr[i].num++;
            }else{
                cookieArr[i].num==1?alert("数量为1,不能再减少"):cookieArr[i].num--;
            }
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            })
            //修改页面上的数量
            $(this).siblings(".product-num").html(`${cookieArr[i].num}`)

            var x= parseInt($(this).closest(".item-list").find(".bold").html().split('¥')[1])
            // console.log(x)
            var y= parseInt($(this).closest(".item-list").find(".product-num").html())
            // console.log(y)
            $(this).closest(".item-list").find(".bold1").html("¥"+x*y+".00")
            // $(".bold1")  
        })
        
    }
     function goodsCarTotal(){
         var sum=0;
            var cookieArr=JSON.parse($.cookie("goods"));
            console.log(cookieArr)
            for(var i=0;i<cookieArr.length;i++){
                var k=cookieArr[i].num;
            //    console.log(k)
               var sum=k+sum;
            }
            // console.log(sum)  //总数量
                var z=cookieArr.length;
                // console.log(z)
                $(".total-check").html(z)
                $(".total-type").html(sum)  
                $(".number").html(z)

                $(".js-to-order").on("click",function(){
                    var  money=$(".bold1");
                    // console.log(money)
                    var p=0;
                    for(var m=0;m<money.length;m++){
                        p+=parseInt(money.eq(m).html().split('¥')[1]);
                    }
                    // console.log(p)
                    $(".js-total-price").html("¥"+p+".00")
                   
                })

    }
    return{
        goodsCarContent,
        goodsCarDelete,
        goodsCarNum,
        goodsCarTotal
    }
})