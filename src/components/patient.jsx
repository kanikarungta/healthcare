import React, { Component } from 'react'
import autoBind from 'react-autobind'

class Patient extends Component {
    constructor (props) {
        super (props)
        autoBind(this)
        this.state= {

        }
    }

    render () {
        return (
            <div>
                Patient page
            </div>
        )
    }
}

export default Patient