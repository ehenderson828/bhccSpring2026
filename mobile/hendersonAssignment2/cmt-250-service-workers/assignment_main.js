/*
1. Register the service worker file at “assignment_serviceworker.js” to the browser and 
   print “Service worker registered” when registration is complete.
*/
function initServiceWorker() {
   navigator.serviceWorker.register('assignment_serviceWorker.js')
   .then(console.log('Service worker registered'));
}

/*
Make sure to call the function that performs this registration after the window is finished loading. 
*/
window.addEventListener("load", () => {
   initServiceWorker();
});
  
/*
2. Create a function called “buttonHandler” that sends the following message to
   the service worker: “Message from Client to SW”
   (send a message to the SW by calling: navigator.serviceworker.controller.postMessage([MESSAGE]))
*/
function buttonHandler() {
   navigator.serviceWorker.controller.postMessage('Message from Client to SW');
}

// call buttonHandler when the button is clicked, no work needed here
document.getElementById('message-button').onclick = buttonHandler;

/*
3. Create an event listener for the ‘message’ event that prints 
   “Message received from service worker” and then prints the message it received 
   (get the text of a message at "event.data")
*/
navigator.serviceWorker.addEventListener('message', (event) => {
   // Static confirmation message
   console.log('Message received from service worker');
   // Log message from service worker to the console
   console.log(event.data);
});