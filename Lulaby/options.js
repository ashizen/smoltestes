//javascript
// Options for the Lulaby Chrome Extension

// Default settings
const defaultSettings = {
  pinDuration: 5,
  sizeIncrease: 1.5
};

// Save options to chrome.storage
function saveOptions() {
  const pinDuration = document.getElementById('pin-duration').value;
  const sizeIncrease = document.getElementById('size-increase').value;
  
  chrome.storage.sync.set({
    pinDuration: pinDuration || defaultSettings.pinDuration,
    sizeIncrease: sizeIncrease || defaultSettings.sizeIncrease
  }, function() {
    // Update status to let user know options were saved.
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get(defaultSettings, function(items) {
    document.getElementById('pin-duration').value = items.pinDuration;
    document.getElementById('size-increase').value = items.sizeIncrease;
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
