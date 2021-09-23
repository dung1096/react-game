import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calcAction, randomAction } from '../../redux/actions/diceAction';

class ResultComponent extends Component {
    render() {
        return (
            <section className="container">
                <h4>Bạn chọn: <span className="text-danger">{this.props.choose}</span></h4>
                <h4>Số bàn thắng: <span className="text-success">{this.props.win}</span></h4>
                <h4>Tổng số bàn chơi: <span className="text-info">{this.props.play}</span></h4>
                <button 
                onClick = {() => {
                    let num = 0;
                    let randomDice = setInterval(() => {
                        num++;
                        this.props.dispatch(randomAction())
                        if( num > 10) {
                            clearInterval(randomDice);
                            this.props.dispatch(calcAction())
                        }
                    },100);
                }}
                type="button" className="btn btn-success mt-2">Chơi</button>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    choose: state.DiceReducer.choose,
    win: state.DiceReducer.win,
    play: state.DiceReducer.play,
});

export default connect(mapStateToProps)(ResultComponent);