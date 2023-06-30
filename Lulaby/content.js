```javascript
let upvotedMessages = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "updateMessage") {
    upvotedMessages = request.data;
    updateMessageDisplay();
  }
});

function increaseMessageSize(message) {
  const messageElement = document.getElementById(message.id);
  if (messageElement) {
    messageElement.style.fontSize = `${message.upvotes * 2}px`;
  }
}

function pinMessage(message) {
  const messageElement = document.getElementById(message.id);
  if (messageElement) {
    messageElement.style.position = 'fixed';
    messageElement.style.top = '0';
    setTimeout(() => {
      messageElement.style.position = '';
      messageElement.style.top = '';
    }, message.upvotes * 1000);
  }
}

function updateMessageDisplay() {
  upvotedMessages.forEach(message => {
    increaseMessageSize(message);
    pinMessage(message);
  });
}
```