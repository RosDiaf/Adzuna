import React, { Component, Fragment } from 'react';
import { 
  isFieldValidated,
  isCharactersLengthValid,
  isEmojiValid,
  clearStatus } from './shared/FormValidation';
import { wordCounter } from './shared/WordCounter';
import { constants } from './shared/constants';
import $ from 'jquery';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, word: 0};
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
      // -- Form successfully validated, thank you message displayed
      $('.status')
        .removeClass('failure')
        .addClass('success')
        .show()
        .text(constants.formStatus.successfully)
        .delay(2000)
        .fadeOut();

      this.setState({ 
        word: wordCounter(notes)
      })
    }
  }

  render() {
    return(
      <Fragment>
        <div class="jumbotron bg-info form">
          <div className="container">
            <div className="row centered">
              <div className="col-lg-6">
                <h1>Adzuna Test Form</h1>
                <div className="status"></div>
                <form id="myForm">
                  <div className="form-group">
                    <label htmlFor="name">Full name: </label>
                    <input type="text" className="form-control" id="name" placeholder="Enter full name" onKeyDown={this.clearError} />
                    <small className="error"></small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" onKeyDown={this.clearError}/>
                    <small className="error"></small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Notes: </label>
                    <textarea className="form-control" id="notes" rows="3" placeholder="Enter notes" onKeyDown={this.clearError} onKeyUp={this.counter}></textarea>
                    <small className="error"></small>
                    <span>Counter: {this.state.count}</span> | <span>Word: {this.state.word}</span>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                  <button type="button" className="btn btn-secondary" onClick={this.reset}>Reset</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Form;