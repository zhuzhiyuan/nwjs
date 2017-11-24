(function(){
var nw=require('nw.gui');

var menu=new nw.Menu({type:'menubar'});

var filemenu=new nw.Menu();
filemenu.append(new nw.MenuItem({label:'新建文件(N)'}));
filemenu.append(new nw.MenuItem({label:'新建窗口(W)'}));
filemenu.append(new nw.MenuItem({type:'separator'}));
filemenu.append(new nw.MenuItem({label:'打开文件(O)...'}));
filemenu.append(new nw.MenuItem({label:'打开文件夹(F)... [Ctrl+k Ctrl+O]'}));

menu.append(new nw.MenuItem({label:'文件(F)',submenu:filemenu}));

var editmenu=new nw.Menu();
editmenu.append(new nw.MenuItem({label:"撤销(U)"}));
editmenu.append(new nw.MenuItem({label:"恢复(R)"}));
editmenu.append(new nw.MenuItem({type:'separator'}));
editmenu.append(new nw.MenuItem({label:"剪切(T)",modifiers:"ctrl",key:"X"}));
editmenu.append(new nw.MenuItem({label:"复制(C)",modifiers:"ctrl",key:"C"}));

menu.append(new nw.MenuItem({label:"编辑(E)",submenu:editmenu,key:"E"}));

nw.Window.get().menu=menu;



var contextMenu=new nw.Menu();

contextMenu.append(new nw.MenuItem({
    label:"刷新"
}));

document.body.addEventListener('contextmenu',function(e){
    e.preventDefault();
    contextMenu.popup(e.x,e.y);
    return false;
})









})();