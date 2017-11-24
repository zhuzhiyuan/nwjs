(function(){
    var nw=require('nw.gui');
    
    document.getElementById("addTray").onclick=function(){
        var tray=null;
        tray=new nw.Tray({title:"Tray",icon:'img/icon.png',tooltip:'Tray'});

        tray.on("click",function(){
            nw.Window.get().restore();
        });

        var trayMenu=new nw.Menu();
        
        trayMenu.append(new nw.MenuItem({
            label:'退出',
            click:function(){
                nw.App.quit();
            }
        }));

        trayMenu.append(new nw.MenuItem({
            label:"Remove This",
            click:function(){
                tray.remove();
                tray=null;
            }
        }))
        tray.menu=trayMenu;
    }
})();