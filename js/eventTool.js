var eventTool = {
    //1.���ݵĻ�ȡ�¼�����
    getEvent:function(e){
        return e||window.event;
    },
    //2.���ݵĻ�ȡclientX��clientY
    getClientX:function(e){
        return this.getEvent(e).clientX;
    },
    getClientY:function(e){
        return this.getEvent(e).clientY;
    },
    //3.���ݵĻ�ȡpageX��pageY
    getPageX:function(e){
        //pageX = clientX + ҳ��ˮƽ������ȥ�ľ���
        return this.getEvent(e).pageX || this.getClientX(e) + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0);
    },
    getPageY:function(e){
        //pageY = clientY + ҳ�洹ֱ������ȥ�ľ���
        return this.getEvent(e).pageY || this.getClientY(e) + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0);
    }
};