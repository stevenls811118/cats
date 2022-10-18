const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreed');

describe('#breedDetailsFromFile', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => {
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      done();
      assert.equal(expectedDesc, bombay);  
    }, (bombay) => {
      console.log('Error to reading breed file')
      done();
      assert.equal(undefined, bombay);
    });
  });
  it('provides, via callback, undefined for a breed that does not exist', (done, errorFn) => {
    breedDetailsFromFile('Saphire', (desc) => {
      done();
      assert.equal(undefined, desc); 
    }, (desc) => {
      console.log('Error to reading breed file')
      done();
      assert.equal(undefined, desc);
    });      
  });
});