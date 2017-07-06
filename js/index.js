//网页顶部
function bannershow(){
    var newsout=$id("newsout");
    var webtopimgmin=$id("webtopimgmin");
    var webtopimgbig=$id("webtopimgbig");
    newsout.onmouseover=function(){
        webtopimgmin.style.opacity=0;
        webtopimgbig.style.display="block";
        webtopimgbig.style.left="-143px";
        webtopimgbig.style.top="55px";

    }
    newsout.onmouseout=function(){
        webtopimgmin.style.opacity=1;
        webtopimgbig.style.display="none";
    }
}

function anZhuoMove(){
    var rightscroll=$id("web-top-bar-right");

    var a=$id("web-top-bar-right-a")
    var flag=true;
    setInterval(function(){
        animate(a,{top:0},function(){
            setTimeout(function(){

                animate(a,{top:-55},function(){
                    a.style.top="55px";
                });
                if(flag){
                    a.innerHTML="领取网易严选宝箱";
                    flag=false;
                }else{
                    a.innerHTML="安卓充值9.8折";
                    flag=true;
                }

            },700)

        })
    },2000)
}

//网页的恶心区域动态start
//var logo = document.getElementById("logo");
$(function(){
    //阴阳师logo向右移动到可视区域（一次性的）
    setTimeout(function(){
        $("#logo").animate({left:30})
    },1200)
    //扇子
    window.onload = function(){
        $(".shanzi").animate({"top":55},800)
    }
    //人物
    setTimeout(function(){
        $(".people").animate({opacity:1})
    },2000)
    //进入官网
    setTimeout(function(){
        $(".gw").animate({right:20})
    },1200)
    //二维码
    setTimeout(function(){
        $(".sub").animate({bottom:0})
    },1200)
    //图片列表
    var person = $("#person");
    $(person).find("a").hover(function(){
        $(this).stop().animate({"top":-20},400)
    },function(){
        $(this).stop().animate({"top":0},400)
    })
})
//旋转木马
var config = [{
    width: 400,
    top: 215,
    left: 210,
    opacity: 0,
    zIndex: 2
}, //0
    {
        width: 600,
        top: 150,
        left: 130,
        background:(0,0,0,.5),
        opacity:0.7,
        zIndex: 3
    }, //1
    {
        width: 774,
        top: 100,
        left: 210,
        opacity: 1,
        zIndex: 4
    }, //2
    {
        width: 600,
        top: 150,
        left: 460,
        background:(0,0,0,.5),
        opacity: 0.7,
        zIndex: 3
    }, //3
    {
        width: 400,
        top: 215,
        left: 585,
        opacity: 0,
        zIndex: 2
    } //4
];
var lb = document.getElementById("lb");
var lis = lb.children[0].children;
var left = document.getElementById("left");
var right = document.getElementById("right");
var arr = [];
//遍历lis,将lis伪数组的元素添加到空数组中
for(var j = 0 ;j<lis.length;j++){
    arr.push(lis[j]);
}
//遍历数组，分散图片
function rotate(){
    for(var i = 0;i<arr.length;i++){
        animate_v5(arr[i],config[i]);
    }
}
rotate();
//点击右按钮，最后一张图片到达第一张图片的位置(删除最后一张，添加到数组最前面)
right.onclick = function(){
    arr.unshift(arr.pop());
    rotate();
}
//点击左按钮，第一张图片到达最后一张图片的位置（删除第一张图片，添加到数组最后面）
left.onclick = function(){
    arr.push(arr.shift());
    rotate();
}