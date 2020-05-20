/** This module creates unique user's ID as a global variable */

function createUserId() {
  /**
   * @param {number} currentDateInUTC - The first moment's date of creating ID
   * @param {number} uniqueId - The unique, additional user's ID
   * @param {string} userIdTemplate - The template of creating integrated with other parameters ID
   * @return {string} userIdValue - The new user's ID searched by using Local Storage
   */

  // Creating template of ID
  const currentDateInUTC = Date.now();
  const uniqueId = Math.round(Math.random() * 100000, 0);
  const userIdTemplate = `user-created_${currentDateInUTC}-ID_${uniqueId}`;
  const userIdValue = localStorage.getItem("userId");

  // Checking ID existence
  if (userIdValue === null) {
    localStorage.setItem("userId", userIdTemplate);
  }

  // Returning users's unique ID
  console.log("User's ID created successfully:", userIdValue);
  return userIdValue;
}

export default createUserId;
