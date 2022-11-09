import React, { Component } from "react"

class Classcomponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)

        return (
            <div> classcomponent {this.props.getind}</div>
        )
    }
}


export default Classcomponent