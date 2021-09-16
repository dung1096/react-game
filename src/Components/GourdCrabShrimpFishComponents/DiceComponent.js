import React, { Component } from 'react';
import { connect } from 'react-redux';
import { playAction, randomAction } from '../../redux/actions/gourdCrabShrimpFishAction';

class DiceComponent extends Component {
    renderDice = () => {
        return this.props.dice.map((dice,index) => {
            return <div className="col-6 my-3" key={index}>
                <img src={dice.src} alt={dice.src} style={{ width: 50 }}/>
            </div>
        })
    }
    render() {
        return (
            <section style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                }}>
                <div className="rounded-circle bg-light row justify-content-center p-5" style={{width: 300}}>
                    {this.renderDice()}
                </div>
                <button
                    className="btn btn-success p-2 mt-2"
                    onClick={() => {
                        let num = 0;
                        let randomDice = setInterval(() => {
                            num++;
                            this.props.random();
                            if( num > 10) {
                                clearInterval(randomDice);
                                this.props.playGame();
                            }
                        },100);
                    }}
                    >
                    Xốc
                </button>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    dice: state.GourdCrabShrimpFishReducer.dice,
})

const mapDispatchToProps = (dispatch) => ({
    playGame: () => dispatch(playAction()),
    random: () => dispatch(randomAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DiceComponent);