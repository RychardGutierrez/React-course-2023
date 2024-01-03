import { NAVIGATE_EVENT } from './consts';

export const navigate = (href) => {
  window.history.pushState({}, '', href);
  //Create a custom event
  const navigateEvent = new Event(NAVIGATE_EVENT);
  window.dispatchEvent(navigateEvent);
};
