/*Write two functions to chain together. The first function, makeAllCaps, will take in an array of words and capitalize them. A second function, sortWords, will sort the words in alphabetical order. If the array contains anything besides a single word (string), an error should be thrown. */


const theseAreNotWords = [3, 9, "Apple"];
const theseAreWords = ['Apple', 'Mango', 'Kiwi'];

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    
    if (array.every(array =>{
        return typeof array === 'string';
    })
    ){ resolve(sortWords(array.map(array => {
            return array.toUpperCase();
          }))
      )
    } else {
      reject('Error:Not all items in the array is a string');
    }
  });
};


const sortWords = array => {
  return new Promise((resolve, reject) => {
    if (array) {
      resolve(array.sort());
    } else {
      reject('Error: strings only!');
    }
  });
};

makeAllCaps(theseAreWords)
  .then(sortWords(theseAreWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

makeAllCaps(theseAreNotWords)
  .then(sortWords(theseAreNotWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));
  


























