/** This module alerts a user about deleting data after reloading a page */

window.onbeforeunload = function () {
  return false;
};
