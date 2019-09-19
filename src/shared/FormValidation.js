import $ from 'jquery';

/**
 * Field validation method with two parameters [field, regular expression].
 * Check if field empty
 * Check field against regExp
 */
let isFieldValidated = (field, regExp) => {
  if(field.val().length == 0) {
    return false;
  }
  else if(field.val().length > 0) {
    if(!regExp.test(field.val())) {
      return false;
    }
  }
}

/**
 * Characters length validation method with two parameters [string, max value].
 * Check if text area empty
 * Check text area against max value
 */
let isCharactersLengthValid = (textArea, max) => {
  if(textArea.val().length == 0) {
    return false;
  }
  else if(textArea.val().length > 0) {
    if(textArea.val().length < max) {
      return false;
    }
  }
}


/**
 * Emoji validation method with one parameters [string].
 * Check if text has emoji included
 */
let isEmojiValid = (str) => {
  const ranges = [
  '\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]',
  ' ', // Also allow spaces
  ].join('|');
  let emojiRegEx = new RegExp(ranges, 'g');
  return emojiRegEx.test(str);
}

/**
 * Clear message status method with two parameters [container, css class].
 * Check if text area empty
 * Check text area against max value
 */
let clearStatus = (obj, type) => {
  $(obj).removeClass(type).fadeOut("slow").text('');
}

export {
  isFieldValidated,
  isCharactersLengthValid,
  isEmojiValid,
  clearStatus
}