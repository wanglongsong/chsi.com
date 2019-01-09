function showDianZan(divid, key, color){
    var color = color || '#5eba79';
    var e = document.createElement("link");
    e.setAttribute("type", "text/css");
    e.setAttribute("rel", "stylesheet");
    e.setAttribute("href", "../../../../t1.chei.com.cn/common/ch/iconfont.css");
    
    var l = document.createElement("link");
    l.setAttribute("type", "text/css");
    l.setAttribute("rel", "stylesheet");
    l.setAttribute("href", "../../../../t4.chei.com.cn/common/css/dianzan.css");
    var r = document.getElementsByTagName("head")[0];
    r.appendChild(e);
    r.appendChild(l);
    var url = window.location.href,
        domain = document.domain.split('.')[1];
    $.ajax({
        type: "get",
        url: "//dianping."+domain+".com.cn/showdz",
        data: {url: url, key: key},
        dataType: "jsonp",
        crossDomain: true,
        success: function (data) {
            if (data.hidden) {
                return;
            }
            var html = '';
            if (data.status) {
                html = '<div class="dianzan dianzan-active" onclick="dianzan(this,\'' + key + '\',\'' + color + '\')">'
                     +      '<div class="dianzan-icon-warp">'
                     +          '<i class="iconfont dianzan-icon" style="color:'+color+'">&#xe65e;</i>'
                     +      '</div>'
                     +  '</div>';
            } else {
                html = '<div class="dianzan">'
                     +      '<div class="dianzan-icon-warp">'
                     +          '<i class="iconfont dianzan-icon">&#xe65e;</i>'
                     +      '</div>'
                     +  '</div>';
            }
            $('#' + divid).replaceWith(html);
        }
    });
}
function dianzan(target, key, color) {
    var $this = $(target),
        url = window.location.href,
        domain = document.domain.split('.')[1],
        html = '';
    $.ajax({
        type: "get",
        url: "//dianping."+domain+".com.cn/dz",
        data: {url: url, key: key},
        dataType: "jsonp",
        success: function (data) {
            if (data.hidden) {
                return;
            }
            html = '<div class="dianzan ydz">'
                 + '<div class="add-one" style="color:'+color+'">+1</div>'
                 + '<div class="dianzan-icon-ydz"><i class="iconfont">&#xe65e;</i></div>'
                 + '<div class="dianzan-num">'+data.dzs+'</div>'
                 + '</div>';
            $this.replaceWith(html);
        }
   })
}
