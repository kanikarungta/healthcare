import React, { Component } from 'react'
import autoBind from 'react-autobind'

class Pharmacist extends Component {
    constructor (props) {
        super (props)
        autoBind(this)
        this.state= {

        }
    }

    render () {
        return (
            <div>
                Pharmacist page
            </div>
        )
    }
}

export default Pharmacist