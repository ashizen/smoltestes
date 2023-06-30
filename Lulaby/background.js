//javascript
let upvotedMessages = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'upvoteMessage') {
    let message = request.data;
    storeMessage(message);
    sendResponse({ success: true });
  }
});

function storeMessage(message) {
  upvotedMessages.push(message);
  chrome.storage.sync.set({ 'upvotedMessages': upvotedMessages }, function() {
    console.log('Message stored');
  });
}

function retrieveMessage() {
  chrome.storage.sync.get('upvotedMessages', function(data) {
    upvotedMessages = data.upvotedMessages;
  });
}

chrome.runtime.onStartup.addListener(() => {
  retrieveMessage();
});

chrome.runtime.onInstalled.addListener(() => {
  retrieveMessage();
});
