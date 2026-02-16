/*
4. Add an event listener for the ‘install’ event that prints the message 
   “Service worker installed” to the console
*/

self.addEventListener('install', (e) => {
   console.log('Service worker installed');
});

/*
5. Add an event listener for the ‘activate’ event that prints the message 
   “Service worker activated” to the console
*/

self.addEventListener('activate', () => { // Activate will only fire once 'install' event succeeds
   console.log('Service worker activated');
});

/*
6. Add an event listener for the ‘message’ event that prints the message “Message received from client”, 
   prints the message it received, and then sends a message back to the source that says “Message from SW to Client” 
   (get the text of a message at "event.data")
   (send a message back to source by calling event.source.postMessage([MESSAGE]))
*/

self.addEventListener('message', () => {
   // Confirm that a message has been sent by the client, log to console
   console.log('Message received from the client');
   // Log message from the client
   console.log(event.data);
   // Send reply back to client
   event.source.postMessage('Message from SW to Client');
});