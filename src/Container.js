import React, { Component, Fragment } from 'react';
import Form from './Form';
import Status from './Status';
import { 
  isFieldValidated,
  isCharactersLengthValid,
  isEmojiValid,
  clearStatus } from './shared/FormValidation';
import { wordCounter } from './shared/WordCounter';
import { constants } from './shared/constants';
import $ from 'jquery';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, word: 0, status: null};
    this.counter = this.counter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  counter(event) {
    // -- Merge the characters length provided into the current state.
    this.setState({ 
      count: event.target.value.length 
    })
  }

  clearError(event) {
    // -- Remove error message when typing
    $('#' + event.target.id).siblings('small').text('')
    clearStatus('.status', 'failure')
  }

  reset() {
    $('#myForm')[0].reset()
  }

  onSubmit(event) {
    // -- Prevent a link from opening the URL
    event.preventDefault();
  
    let name = $('#name');
    let email = $('#email');
    let notes = $('#notes');

    // -- Fullname provided, validate only letters and spaces
    if(isFieldValidated(name, constants.regExp.name) === false) {
      $(name).siblings('small').text(constants.errorMessages.name)
    }

    // -- Email provided, validate correct format
    else if(isFieldValidated(email, constants.regExp.email) === false) {
      $(email).siblings('small').text(constants.errorMessages.email)
    }

    // -- Emoji provided, check if exist in the string and display error message
    else if(isEmojiValid(notes.val()) === true) {
        $(notes).siblings('small').text(constants.errorMessages.emoji)
    }

    // -- Notes provided, validate correct length.
    // -- Validation should pass only if user has entered 20 characters or  more in this field
    else if(isCharactersLengthValid(notes, 20) === false) {
      $(notes).siblings('small').text(constants.errorMessages.notes)
    }

    else {
      this.setState({ 
        word: wordCounter(notes),
        status: 'success'
      })
    }
  }

  render() {
    return(
      <Fragment>
        <div className="jumbotron bg-info form">
          <div className="container">
            <div className="row centered">
              <div className="col-lg-6">
                <h1>Adzuna Test Form</h1>
                <Status status={this.state.status} />
                <Form 
                  count={this.state.count}
                  word={this.state.word} 
                  onKeyDown={this.clearError} 
                  onKeyUp={this.counter}
                  onClickReset={this.reset} 
                  onClickSubmit={this.onSubmit}/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Container;