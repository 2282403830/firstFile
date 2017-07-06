
function $id(id) {
    return document.getElementById(id);
}

/**
 *
 * @param element 要移动的元素
 * @param target 要移动到的位置
 */
function animate(element,target) {
    //1 先清除元素上已经存在的计时器
    clearInterval(element.timer);
    //设置每次移动的步长
    var step = 20;
    //重新设置定时器
    element.timer = setInterval(function(){
        //获取当前位置
        var currentLeft = element.offsetLeft;//offsetLeft看不懂就去看预习的讲义
        //判断方向，如果当前的位置在目标位置的左边，就是正方向，反之是负方向
        var temp = currentLeft < target ? step : - step;
        //计算新的的位置
        currentLeft += temp;
        //判断是否到达目标位置
        //当目标位置-当前位置的绝对值比步长要小的时候，我们认为到达目标位置了
        if (  Math.abs(target - currentLeft) < Math.abs(step) ){
            //清除计时器
            clearInterval(element.timer);
            element.style.left = target + "px";
        }else {
            element.style.left = currentLeft + "px";
        }
    },20);
}