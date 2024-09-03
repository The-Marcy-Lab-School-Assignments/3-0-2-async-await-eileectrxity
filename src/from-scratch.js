//3.0.2 Assignment: Async/Await by Eileen

//QUESTION 1-7: this func is going to be a wrapper for the fetch api- 1) pass in the arguments (a url str + an options obj), 2) make the func async, 3) return a tuple, 4) make the fetch call, 5) check for errors, 6) handle not ok response, 7) check if JSON
export const fetchHandler = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`); //if so, throwing a network err for the catch statement to handle it

    const isJson = (response.headers.get('content-type') || '').includes('application/json'); //getting a bool on if the response header has a content type and if that content type is json- headers.get would return null if it finds nothing which would break the .includes() chain (called short circuiting)
    return [{}, null]; //returning a tuple of the data (tuples handle data + errors in a predictable way as the order never changes so we can use them beyond helper fetch funcs if needed)
 }
  catch (err) {
    console.warn(err);
    return [null, err]; //returning a tuple of the error
 }
};
