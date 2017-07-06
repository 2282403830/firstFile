var eventTool = {
    //1.兼容的获取事件对象
    getEvent:function(e){
        return e||window.event;
    },
    //2.兼容的获取clientX和clientY
    getClientX:function(e){
        return this.getEvent(e).clientX;
    },
    getClientY:function(e){
        return this.getEvent(e).clientY;
    },
    //3.兼容的获取pageX和pageY
    getPageX:function(e){
        //pageX = clientX + 页面水平滚动出去的距离
        return this.getEvent(e).pageX || this.getClientX(e) + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0);
    },
    getPageY:function(e){
        //pageY = clientY + 页面垂直滚动出去的距离
        return this.getEvent(e).pageY || this.getClientY(e) + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0);
    }
};