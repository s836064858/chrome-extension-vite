var m="RELOAD";chrome.runtime.onMessage.addListener((e,n,r)=>{e.msg==m&&(chrome.runtime.reload(),r())});
