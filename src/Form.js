import React, { Component, Fragment } from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.counter = this.counter.bind(this);
        this.clearError = this.clearError.bind(this);
        this.reset = this.reset.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    clearError(event) {
        this.props.onKeyDown(event)
    }

    counter(event) {
        this.props.onKeyUp(event)
    }

    reset() {
        this.props.onClickReset()
    }

    onSubmit(event) {
        this.props.onClickSubmit(event)
    }
    
    render() {
        return(
            <Fragment>
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
                        <span>Counter: {this.props.count}</span> | <span>Word: {this.props.word}</span>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={this.reset}>Reset</button>
                </form>
            </Fragment>
        )
    }
}

export default Form;

