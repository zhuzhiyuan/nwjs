(function(){
    // get the system clipboard
var nw=require('nw.gui');


document.getElementById("getClipboard").onclick=function(){
    var clipboard = nw.Clipboard.get();
    
    // Read from clipboard
    var text = clipboard.get('text');
    document.getElementById("clipboardText").innerText=text;
}
document.getElementById("setClipboard").onclick=function(){
    var clipboard = nw.Clipboard.get();
    
    var text = document.getElementById("clipboardText").value;
    console.log(text);
    clipboard.set(text, 'text');
}

})();