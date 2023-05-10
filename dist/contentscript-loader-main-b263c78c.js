(function () {
            (async () => {
                  await import(
                    chrome.runtime.getURL("assets/main-b263c78c.js")
                  );
                })().catch(console.error);
            })();