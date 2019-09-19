import $ from 'jquery';

/**
 * Word length validation method with one parameters [string].
 * Check if text area empty
 * Split string and count words
 */
let wordCounter = (stringVal) => {
  if(stringVal.val().length > 0) {
    let wordArr = stringVal.val().split(" ");
    return wordArr.length;
  }
}

export {
  wordCounter
}