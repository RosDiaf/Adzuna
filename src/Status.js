import React, { Component, Fragment } from 'react'
import { constants } from './shared/constants';
import $ from 'jquery';

class Status extends Component {
    render() {
        if(this.props.status === 'success') {
            $('.status')
            .addClass('success')
            .show()
            .text(constants.formStatus.successfully)
            .delay(2000)
            .fadeOut();
        }
        return(
            <Fragment>
                <div className="status"></div>
            </Fragment>
        )
    }
}

export default Status