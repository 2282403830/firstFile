//��ҳ����
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
                    a.innerHTML="��ȡ������ѡ����";
                    flag=false;
                }else{
                    a.innerHTML="��׿��ֵ9.8��";
                    flag=true;
                }

            },700)

        })
    },2000)
}

//��ҳ�Ķ�������̬start
//var logo = document.getElementById("logo");
$(function(){
    //����ʦlogo�����ƶ�����������һ���Եģ�
    setTimeout(function(){
        $("#logo").animate({left:30})
    },1200)
    //����
    window.onload = function(){
        $(".shanzi").animate({"top":55},800)
    }
    //����
    setTimeout(function(){
        $(".people").animate({opacity:1})
    },2000)
    //�������
    setTimeout(function(){
        $(".gw").animate({right:20})
    },1200)
    //��ά��
    setTimeout(function(){
        $(".sub").animate({bottom:0})
    },1200)
    //ͼƬ�б�
    var person = $("#person");
    $(person).find("a").hover(function(){
        $(this).stop().animate({"top":-20},400)
    },function(){
        $(this).stop().animate({"top":0},400)
    })
})
//��תľ��
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
//����lis,��lisα�����Ԫ����ӵ���������
for(var j = 0 ;j<lis.length;j++){
    arr.push(lis[j]);
}
//�������飬��ɢͼƬ
function rotate(){
    for(var i = 0;i<arr.length;i++){
        animate_v5(arr[i],config[i]);
    }
}
rotate();
//����Ұ�ť�����һ��ͼƬ�����һ��ͼƬ��λ��(ɾ�����һ�ţ���ӵ�������ǰ��)
right.onclick = function(){
    arr.unshift(arr.pop());
    rotate();
}
//�����ť����һ��ͼƬ�������һ��ͼƬ��λ�ã�ɾ����һ��ͼƬ����ӵ���������棩
left.onclick = function(){
    arr.push(arr.shift());
    rotate();
}