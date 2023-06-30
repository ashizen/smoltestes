Shared Dependencies:

1. Exported Variables:
   - `upvotedMessages`: An array to store the upvoted messages, shared between `popup.js`, `background.js`, and `content.js`.

2. Data Schemas:
   - `Message`: An object schema representing a Twitch message, used in `popup.js`, `background.js`, and `content.js`.

3. ID Names of DOM Elements:
   - `upvoteButton`: The ID of the upvote button in `popup.html` and `popup.js`.
   - `messageContainer`: The ID of the container where messages are displayed, used in `popup.html` and `popup.js`.

4. Message Names:
   - `upvoteMessage`: A message sent from `popup.js` to `background.js` when a message is upvoted.
   - `updateMessage`: A message sent from `background.js` to `content.js` to update the display of a message.

5. Function Names:
   - `increaseMessageSize`: A function in `popup.js` and `content.js` that increases the size of a message.
   - `pinMessage`: A function in `popup.js` and `content.js` that pins a message.
   - `storeMessage`: A function in `background.js` that stores an upvoted message using the Chrome Storage API.
   - `retrieveMessage`: A function in `background.js` that retrieves upvoted messages from the Chrome Storage API.
   - `updateMessageDisplay`: A function in `content.js` that updates the display of a message based on its upvotes.