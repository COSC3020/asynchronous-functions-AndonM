/*  
NOT ENTIRELY SURE IF THIS IS ACTUALLY ASYNC? THE LIBRARY HAS AN ASYNCHIFY FUNCTION
BUT I FELT I WOULD BE MISSING THE POINT OF THE EXERCISE IN USING IT (I.E. JUST PLUGGING
IN THE KEY FINDER FUNCTION TO THE ASYNCHIFY FUNCTION) 
*/

function countOccurrencesAsync(array, key) {
    return new Promise((resolve) => {
      const count = array.reduce((acc, element) => (element === key ? acc + 1 : acc), 0);
      resolve(count);
    });
}