(function(){
    var nw=require('nw.gui');

    document.getElementById("notification").onclick=function(){
        var notication = new Notification("title",{
            body:"这是一条紧急通知",
            icon:'img/icon.png',
            title:"hello",
            tag:'tag'
        });
        notication.onclick=function(n,e){
            notication.close();
        }
    }
})();