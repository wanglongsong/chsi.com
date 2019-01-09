$(function(){
	//添加propertychange事件，监听用户输入内容
	$.extend($.fn,{
        watch : function(callback){
            return this.each(function(){
                $.data(this, "originVal", $(this).val());
                $(this).bind("input propertychange", function(){
                    var originVal = $(this, "originVal");
                    var currentVal = $(this).val();
                    if(originVal !== currentVal){
                        $.data(this, "originVal", $(this).val());
                        callback(currentVal);
                    }
                })
            });
        }
    });
    //在上面容器中显示用户输入的内容
    $("#zsbh").bind('input propertychange', function() {
        var zsbh_tips = $(".zsbh_tips");
        var currentVal = $("#zsbh").val();
        if(currentVal == "" || currentVal == "undefined"){
            zsbh_tips.hide();
        }else{
            zsbh_tips.show().html(currentVal);
        }
    });

    $("#zsbh").focus(function(){ 
        if($("#zsbh").val() == ""){
            $(".zsbh_tips").hide();
        }else{
            $(".zsbh_tips").show();
        }
    });
    $("#zsbh").blur(function(){ $(".zsbh_tips").hide(); });
})