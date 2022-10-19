const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    } else {
      functionToRunWhenThingsAreDone(undefined);
    }  
  });
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log(breed) // => print out details correctly.
};

/* const errorFn = error => {
  console.log("error to find this breed");
}; */
// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bomb', printOutCatBreed);

module.exports = breedDetailsFromFile;