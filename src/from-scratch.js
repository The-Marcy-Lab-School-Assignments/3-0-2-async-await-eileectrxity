//3.0.2 Assignment: Async/Await by Eileen

//QUESTION 1-8: this helper func is going to be a wrapper for the fetch api- 1) pass in the arguments (a url str + an options obj), 2) make the func async, 3) return a tuple, 4) make the fetch call, 5) check for errors, 6) handle not ok response, 7) check if JSON, 8) return the tuple
export const fetchHandler = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`); //if so, throwing a network err for the catch statement to handle it

    const isJson = (response.headers.get('content-type') || '').includes('application/json'); //getting a bool on if the response header has a content type and if that content type is json- headers.get would return null if it finds nothing which would break the .includes() chain (called short circuiting)
    if (isJson) {
      const jsonData = await response.json(); //if the response resolves to a json data type then parse the data
      return [jsonData, null]; //returning a tuple of the json data (tuples handle data + errors in a predictable way as the order never changes so we can use them beyond helper fetch funcs if needed)
    } else {
      const textData = await response.text(); //if not a json data type, read the response body as plain text (would return an empty str if there's no data to parse)
      return [textData, null]; //returning a tuple of the text data
    }
  }
  catch (err) {
    console.warn(err);
    return [null, err]; //returning a tuple of the error
  }
};

//testing helper func
export const getRandomDog = async () => {    
  const [dogData, error] = await fetchHandler('https://dog.ceo/api/breeds/image/random');

  if (dogData) console.log(dogData);
};

getRandomDog();