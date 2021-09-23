import React, { Component } from 'react';
import BetComponent from './BetComponent';
import ResultComponent from './ResultComponent';
import diceStyle from '../../styles/diceStyle.module.css';
class DiceIndex extends Component {
    render() {
        return (
            <section className={`${diceStyle.diceGame}`}
            style={{
            background: 'url("./img/diceGame/bgGame.png") 100% 100% no-repeat',
            backgroundSize: 'cover',
            width: "100%",
            height: "100%",
            position: "fixed",
            left: 0,
            top: 0,
        }}>
                <BetComponent/>
                <ResultComponent/>
            </section>
        );
    }
}

export default DiceIndex;