import React, { Component } from 'react'
import autoBind from 'react-autobind'

class Doctor extends Component {
    constructor (props) {
        super (props)
        autoBind(this)
        this.state= {

        }
    }

    render () {
        return (
            <div>
                Doctor page
            </div>
        )
    }
}

export default Doctor