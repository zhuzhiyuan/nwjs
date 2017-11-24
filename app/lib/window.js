(function(){
    var nw=require('nw.gui');
    var win=nw.Window.get();
    document.getElementById("addWindow").onclick=function(){
        nw.Window.open("setting.html",{},function(newwin){
        newwin.on("focus",function(){
            console.log('New window is focused');
        });
        });
    }
    win.on("minimize",function(){
    win.setShowInTaskbar(false);
    });
    win.on("restore",function(){
        win.setShowInTaskbar(true);
    });
    win.on('new-win-policy', function(frame, url, policy) {
        // do not open the window
        console.log(url)
        if(url.indexOf('zip')!==-1){
            policy.forceDownload();
        }else if(url.indexOf('tuhu')!==-1){
            policy.forceCurrent();
        }else{
            // and open it in external browser
            policy.ignore();
            nw.Shell.openExternal(url);
        }
    });
    win.on('navigation',function(frame,url,policy){
        console.log(url)
        if(url.indexOf('zip')!==-1){
            policy.forceDownload();
        }else if(url.indexOf('tuhu')!==-1){
            policy.forceCurrent();
        }else{
            // and open it in external browser
            policy.ignore();
            nw.Shell.openExternal(url);
        }
    })
    document.getElementById("addBadge").onclick=function(){
        win.setBadgeLabel("99");
    }

    document.getElementById("fullScreen").onclick=function(){
        win.enterFullscreen();
    }
    document.getElementById("leaveFullScreen").onclick=function(){
        win.leaveFullscreen();
    }
})();