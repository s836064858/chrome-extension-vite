var PORT=8181,MENIFEST_NAME='crx-vite';"use strict";

// src/constants.ts
var VITE_PLUGIN_CRX_MV3 = "vite-plugin-crx-mv3";
var UPDATE_CONTENT = "UPDATE_CONTENT";
var RELOAD = "RELOAD";

// src/client/content.ts
var ws = new WebSocket(`ws://localhost:${PORT}/${MENIFEST_NAME}/crx`);
var timer;
ws.onopen = function() {
  if (timer)
    clearInterval(timer);
  timer = setInterval(() => {
    ws.send(JSON.stringify({ type: "ping" }));
  }, 5e3);
  console.log(`[${VITE_PLUGIN_CRX_MV3}] connection established`);
};
ws.onmessage = function(e) {
  var _a;
  if (e.data === UPDATE_CONTENT && ((_a = chrome.runtime) == null ? void 0 : _a.id)) {
    chrome.runtime.sendMessage({ msg: RELOAD }, () => {
      window.location.reload();
    });
  }
};
ws.onclose = function() {
  if (timer)
    clearInterval(timer);
  console.log(`[${VITE_PLUGIN_CRX_MV3}] connection closed.`);
};
