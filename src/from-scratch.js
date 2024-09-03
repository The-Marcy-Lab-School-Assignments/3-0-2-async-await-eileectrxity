//3.0.2 Assignment: Async/Await by Eileen

//QUESTION 1-4: this func is going to be a wrapper for the fetch api- 1) pass in the arguments (a url str + an options obj), 2) make the func async, 3) return a tuple, 4) make the fetch call
export const fetchHandler = async (url, options = {}) => {
  const response = await fetch(url, options);
  return [{}, null]; //returning a tuple to handle data + errors in a predictable way (order never changes) beyond this func if needed
};
