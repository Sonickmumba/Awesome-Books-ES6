import { addContent } from './modules/bookActions.js';
import navEvents from './modules/navEvents.js';
import dateTimeFunc from './modules/time.js';
import displayBookFromStore from './modules/displayBookStore.js';

addContent();
navEvents();
dateTimeFunc();
displayBookFromStore();
