import React, { Component } from "react"
import "./Lottoball.css"


class Lottoball extends Component {
    static defaultProps = {
        num: 40
    }
    render() {
        return (
            <div className="Lottoball">{ this.props.num }</div>
        )
    }
}

export default Lottoball