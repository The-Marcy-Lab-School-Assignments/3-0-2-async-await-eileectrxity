//3.0.2 Assignment: Async/Await by Eileen

//QUESTION 1-5: this func is going to be a wrapper for the fetch api- 1) pass in the arguments (a url str + an options obj), 2) make the func async, 3) return a tuple, 4) make the fetch call, 5) check for errors
export const fetchHandler = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    return [{}, null]; //returning a tuple of the data (tuples handle data + errors in a predictable way as the order never changes so we can use them beyond helper fetch funcs if needed)
 }
  catch (err) {
    console.warn(err);
    return [null, err]; //returning a tuple of the error
 }
};
