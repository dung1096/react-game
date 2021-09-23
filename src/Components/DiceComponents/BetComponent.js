import React, { Component } from 'react';
import { connect } from 'react-redux';
import { betAction } from '../../redux/actions/diceAction';

class BetComponent extends Component {
    render() {
        return (
            <section className="container">
                <h3 className="text-center text-info mt-2">
                    Game xúc xắc
                </h3>
                <div className="row my-3 align-items-center">
                    <div className="col-4">
                        <button
                        onClick={() => {
                            this.props.dispatch(betAction("Tài"))
                        }}
                         type="button" className="btn btn-danger text-light p-3">Tài</button>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-around">
                            {this.props.diceArray.map((dice,index) => {
                                return (
                                <img
                                    key={index}
                                    src={dice.src}
                                    alt={dice.src}
                                    style={{ width: 70 }}
                                />
                                )})}
                            </div>
                    </div>
                    <div className="col-4">
                        <button
                        onClick={() => {
                            this.props.dispatch(betAction("Xỉu"))
                        }}
                         type="button" className="btn btn-dark text-light p-3">Xỉu</button>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    choose: state.DiceReducer.choose,
    diceArray: state.DiceReducer.diceArray,
});

export default connect(mapStateToProps)(BetComponent);