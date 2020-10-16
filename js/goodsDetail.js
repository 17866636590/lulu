define(["jquery","jquery-cookie"], function ($) {
        function glassPic(){
        $(".detail-li").on("mousemove",".content-l",function(ev){
            var l=ev.pageX-$(this).offset().left-100;
                l = Math.max(0, l);
                l = Math.min(l, 300);
                var t=ev.pageY-$(this).offset().top-100;
                t = Math.max(0, t);
                t = Math.min(t, 300);
                $(".glass").css({
                    left:l,
                    top:t
                })
                $(".big-glass img").css({
                    left:-2*l,
                    top:-2*t
                })
        })
        $(".detail-li").on("mouseenter",".detail-pic",function(){
        $(".glass,.big-glass").css("display","block")
        })
        $(".detail-li").on("mouseleave",".detail-pic",function(){
            $(".glass,.big-glass").css("display","none")
            })
            }
        
        function download(){
            //找到详情页加载的id
            var product_id=goodsDetail(location.search,"product_id");
            $.ajax({
                type:"get",
                url:"./../data/data.json",
                success:function(arr1){
                var goodsMsg=arr1.find(item => item.id==product_id);
                    // console.log(goodsMsg)
                    var node=$(`<div class="content-l fl">
                    <div class="detail-t">
                        <ul class="detail-pic">
                            <li class="pic-content zhong"> <div class="detail-first"><img src=${goodsMsg.img}/></div>
                                <div class="glass"></div>
                                <div class="big-glass">
                                    <img id="bigPic" src=${goodsMsg.img} />
                                </div>
                            </li>
                            <li class="pic-content"> <img src=${goodsMsg.img1} />
                                <div class="glass"></div>
                                <div class="big-glass">
                                    <img id="bigPic" src=${goodsMsg.img1} />
                                </div>
                            </li>
                            <li class="pic-content"> <img src=${goodsMsg.img2} />
                                <div class="glass"></div>
                                <div class="big-glass">
                                    <img id="bigPic" src=${goodsMsg.img2} />
                                </div>
                            </li>
                            <li class="pic-content"> <img src=${goodsMsg.img3} />
                                <div class="glass"></div>
                                <div class="big-glass">
                                    <img id="bigPic" src=${goodsMsg.img3} />
                                </div>
                            </li>
                            <li class="pic-content"> <div class="detail-first"><img src=${goodsMsg.img4} /></div>
                                <div class="glass"></div>
                                <div class="big-glass">
                                    <img id="bigPic" src=${goodsMsg.img4} />
                                </div>
                            </li>  
                            
                        </ul>
                      
                    </div>
                    <div class="detail-b">
                        <ul class="detail-list">
                            <li class="detail-btn detail-act"> <img src=${goodsMsg.img} />
                            <div class="mask"></div>
                            </li>
                            <li class="detail-btn">  <img src=${goodsMsg.img1} />
                                <div class="mask"></div>
                            </li>
                            <li class="detail-btn"> <img src=${goodsMsg.img2} />
                                <div class="mask"></div>
                            </li>
                            <li class="detail-btn"> <img src=${goodsMsg.img3} />
                                <div class="mask"></div>
                            </li>
                            <li  class="detail-btn"> <img src=${goodsMsg.img4} />
                                <div class="mask"></div>
                            </li>
                        </ul>
                        <div class="share">
                            <span class="share-txt">分享到</span>
                            <span class="qq"><span class="iconfont icon-qq"></span></span>
                            <span class="weixin"><span class="iconfont icon-weixin"></span></span>
                            <span class="kong">|</span>
                            <span class="shou"><span class="iconfont icon-shoucang"></span>收藏</span>
                            <span class="dui"><span class="iconfont icon-duibi"></span>对比</span>
        
                        </div>
                    </div>
                </div>
                <div class="content-r fr">
                    <div class="detali-txt1">
                        <span class="zi">自营</span>
                        <span class="detail-title">${goodsMsg.title}</span>
                    </div>
                    <div class="detail-ps"><span id="bao">极速保价</span>${goodsMsg.letter}</div>
                    <div class="pirce-box">
                        <div class="price-logo">秒杀专栏</div>
                        <div class="info1"><span class="b-price"><b>${goodsMsg.priceNew}</b></span><span class="s-pirce"><del>¥4499.00</del></span><span class="price-logo">限时特惠</span>
                        </div>
                        <div class="info2">
                            <span class="vip-pirce">${goodsMsg.priceOld}</span>
                            <i class="tag_pro">PRO</i>  
                            <span class="kai">开通PRO会员,预计可省<span class="org">340元</span> &nbsp;&nbsp;&nbsp;立即开卡<b>></b></span>
                        </div>
                    </div>
                    <div class="discounts">
                                <span class="dis-tit fl dis-first">优惠</span>
                            <div class="col1">
                                <span class="price-logo">场景套装</span>
                                <span class="dis-con"> 满1500送智能音箱1个，下单时需用户手动勾选赠品，秒杀不参与满赠，数量有限，送完即止！</span>
                            </div>
                            <div class="col1">
                                <span class="price-logo">满赠</span>
                                <span class="dis-con"> 满1500送智能音箱1个，下单时需用户手动勾选赠品，秒杀不参与满赠，数量有限，送完即止！</span>
                            </div>
                            <div class="col1">
                                <span class="price-logo">送积分</span>
                                <span class="dis-con"> 最高送339积分</span>
                            </div>
                    </div>
                    <div class="evaluate ">
                        <span class="dis-tit fl">评价</span>
                        <ul class="evaluate-list fl">
                            <li>质量好(217)</li>
                            <li>快递很快(201)</li>
                            <li>容量合适(175)</li>
                        </ul>
                    </div>
                    <div class="detail-color ">
                        <span class="dis-tit">颜色</span>
                        <span class="col-pic"><img class="small-bing" src=${goodsMsg.img}/>${goodsMsg.color}</span>
                    </div>
                    <div class="detail-size">
                        <span class="dis-tit">规格</span>
                        <span class="col-size">${goodsMsg.type}</span>
                    </div>
                    <div class="detail-num">
                        <span class="dis-tit">数量</span>
                        <span class="big-num">
                            <span class="col-jian"><b class="jiacu">-</b></span><span class="col-nummber">1</span><span class="col-add"><b class="jiacu">+</b></span>
                         </span>
                    </div>
                    <div class="detail-eare">
                        <span class="dis-tit">配送</span>
                        <select class="di"size="1">
                            <option value="qingdao">山东省 青岛市 市北区</option>
                            <option value="heze">山东省 菏泽市 单县</option>
                            <option value="linyi">山东省 临沂市 郯城</option>
                            <option value="qingdao">山东省 青岛市 黄岛区</option>
                            <option value="guangzhou">广东省 广州市 天河区</option>
                        </select>
                        <span class="detail-ttt">有货</span>
                    </div>
                    <div class="detail-serve">
                        <span class="dis-tit">服务</span>
                        <span class="col-sever">延长保修</span>
                    </div>
                    <div class="detail-gong">
                        <span class="dis-tit">供货商</span>
                        <span class="col-sever">美的冰箱官方旗舰店</span>
                    </div>
                    <div class="detail-but">
                        <button class="add-car">加入购物车</button>
                        <button class="mai">立即购买</button>
                    </div>
                    <div class="detail-footer">
                        <span class="iconfont icon-renzheng- iconfont1"></span>
                        <span class="col-sever">美的冰箱官方旗舰店</span>
                        <span class="iconfont icon-renzheng- iconfont1"></span>
                        <span class="col-sever">全国联保</span>
                        <span class="iconfont icon-renzheng- iconfont1"></span>
                        <span class="col-sever">全场包邮</span>
                    </div>
                </div>`).appendTo(".detail-li");
                },error:function(msg){
                    console.log(msg)
                }
            })
              //用事件委托,给加入购物车按钮,添加点击操作
            $(".detail-li").on("click",".add-car",function(){
                //获取当前点击加入购物车按钮,商品的id
                //cookie本地缓存(最大只能存储4kb,只能存储字符串),存储商品的id,商品的数量
                //[{id:1,num1},{id:2,num2}]转成json格式的字符串存储在cookie中
           
                //1.判断是不是第一次添加
                var first=$.cookie("goods") == null ? true : false;
                //2.如果是第一次添加
                if(first){
                    //直接创建cookie
                    var cookieArr=[{id:product_id,num:1}];
                    $.cookie("goods",JSON.stringify(cookieArr),{
                        expires:7
                    })
                }else{
                    //3.判断之前是否添加过
                    var same=false;//假设没有添加过
                    var cookieStr=$.cookie("goods");
                    var cookieArr=JSON.parse(cookieStr);
                    for(var i=0;i<cookieArr.length;i++){
                        if(cookieArr[i].id==product_id){
                            //之前添加过该商品
                            cookieArr[i].num++;
                            same=true;
                            break;
                        }
                    }
                    if(!same){
                        //如果没有添加过,新增商品数据
                        var obj={id:product_id,num:1};
                        cookieArr.push(obj);
                    }
                    //最后,存回cookie中
                    $.cookie("goods",JSON.stringify(cookieArr),{
                        expires:7
                    })
                }
                alert("加入成功,去购物车查看吧~") 
            })
            return false;
            }
        //获取当前要加载详情的商品数据
        //?name1=value1?name2=value2?name3=value3
            function goodsDetail(search,name){
            var start=search.indexOf(name + "=");
            if(start==-1){
                return null;
            }else{
                var end=search.indexOf("&",start);
                if(end==-1){
                    end=search.length;
                }
        
                //提取想要的键值对
                var str=search.substring(start,end);
                var arr=str.split("=");
                return arr[1];
            }
            }
    return{
        glassPic,
        download
    }
})