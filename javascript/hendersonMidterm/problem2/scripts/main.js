// Entry point: imports and calls each module in order
import { loadHead } from './head.js';
import { buildDOM } from './dom.js';
import { attachEvents } from './events.js';

loadHead();      // Inject <head> elements first
buildDOM();      // Build page content
attachEvents();  // Attach event listeners to DOM elements
