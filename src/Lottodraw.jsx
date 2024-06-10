import React, { Component } from "react";
import Lottoball from "./Lottoball";
import "./Lottodraw.css"

class Lottodraw extends Component {
    static defaultProps = {
        title: "Lotto 6/55",
        maxBalls: 6,
        maxNum: 55
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: []
        }
        this.generateNumbers = this.generateNumbers.bind(this);
    }
    rando(maxNum) {
        return Math.floor(Math.random() * maxNum) + 1;
    }
    generateNumbers(evt) {
        const newNums = [];
        for (let i = 0; i < this.props.maxBalls; i++) {
            newNums.push(this.rando(this.props.maxNum));
        }
        this.setState({nums: newNums})
    }
    
    render() {
        const { title } = this.props;
        const { nums } = this.state;
        return (
            <div className="Lottodraw">
                <h1 className="Lottodraw-title">{title}</h1>
                <div className="Lottodraw-balls">
                    {nums.map(el => (
                        <Lottoball num={el} />
                    ))}
                </div>
                <div>
                    <button className="Lottodraw-button" onClick={ this.generateNumbers }>Draw</button>
                </div>
            </div>
        )
    }
}

export default Lottodraw;