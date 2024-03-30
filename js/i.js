//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

// 鼠标点击出现颜色变化的文字特效
var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("欢迎", "猫猫大人", "光临", "指导~", "₍˄·͈༝·͈˄*₎◞ ̑̑");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX, y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#ff6651"
        });
        // 应用CSS动画
        $i.addClass("colorChange");
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function () {
            $i.remove();
        });
    });
});

// 添加点击CSS动画
var style = "<style>";
style += "@keyframes colorChange {";
style += "0% { color: red; }";
style += "25% { color: yellow; }";
style += "50% { color: green; }";
style += "75% { color: blue; }";
style += "100% { color: red; }";
style += "}";
style += ".colorChange {";
style += "animation: colorChange 2s infinite;";
style += "}";
style += "</style>";
$("head").append(style);

// 发布留言的函数
function postMessage() {
    var messageInput = document.getElementById('message-input');
    var messagesContainer = document.getElementById('messages-container');
    var newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.textContent = messageInput.value;
    messagesContainer.appendChild(newMessage);
    messageInput.value = ''; // 清空输入框
}