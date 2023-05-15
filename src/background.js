/**
 * 监听content-scripts消息发送
 * chrome.runtime.sendMessage({ type: 'notify' })
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message)
})
