```javascript
let upvotedMessages = [];

document.addEventListener('DOMContentLoaded', function() {
    let upvoteButton = document.getElementById('upvoteButton');
    upvoteButton.addEventListener('click', function() {
        let messageContainer = document.getElementById('messageContainer');
        let selectedMessage = messageContainer.value;
        if (selectedMessage) {
            increaseMessageSize(selectedMessage);
            pinMessage(selectedMessage);
            chrome.runtime.sendMessage({type: 'upvoteMessage', data: selectedMessage});
        }
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'updateMessage') {
        let updatedMessage = request.data;
        let messageContainer = document.getElementById('messageContainer');
        let messageIndex = upvotedMessages.findIndex(message => message.id === updatedMessage.id);
        if (messageIndex !== -1) {
            upvotedMessages[messageIndex] = updatedMessage;
            messageContainer.innerHTML = upvotedMessages.map(message => `<p>${message.content}</p>`).join('');
        }
    }
});

function increaseMessageSize(message) {
    let messageElement = document.getElementById(message.id);
    let currentSize = parseInt(window.getComputedStyle(messageElement).fontSize);
    messageElement.style.fontSize = (currentSize + 2) + 'px';
}

function pinMessage(message) {
    let messageElement = document.getElementById(message.id);
    messageElement.style.position = 'fixed';
    messageElement.style.top = '0';
    setTimeout(function() {
        messageElement.style.position = '';
    }, 5000);
}
```