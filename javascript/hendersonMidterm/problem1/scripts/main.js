// Entry point: imports and calls each module in order
import { loadHead } from './head.js'; // Head first
import { buildDOM } from './dom.js'; // body second

loadHead();      // Inject <head> elements first
buildDOM();      // Build page content