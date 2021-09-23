import React, { Component } from 'react';
import BetListComponent from './BetListComponent';
import DiceComponent from './DiceComponent';
import PointComponent from './PointComponent';
import style from "../../styles/gourdCrabShrimpFishStyle.module.css";

class GourdCrabShrimpFishIndex extends Component {
    render() {
        return (
            <section className={`container-fluid bg-dark ${style.gourdCrabShrimpFishGame}`} >
                <h1 className="text-center text-danger pt-2">Game Bầu Cua</h1>
                <div className="row">
                    <div className="col-12">
                        <PointComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <BetListComponent/>
                    </div>
                    <div className="col-4">
                        <DiceComponent/>
                    </div>
                </div>
            </section>
        );
    }
}

export default GourdCrabShrimpFishIndex;