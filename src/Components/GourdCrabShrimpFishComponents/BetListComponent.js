import React, { Component } from 'react';
import { connect } from 'react-redux';
import { betAction } from '../../redux/actions/gourdCrabShrimpFishAction';

class BetListComponent extends Component {
    renderBetList = () => {
        return this.props.betList.map((bet,index) => {
            return (
                <div className="col-4 my-2" key={index}>
                    <img src={bet.src} alt={bet.src} style={{ width: 140 }}/>
                    <div className="p-2 m-2 bg-warning">
                        Cược:
                        <button 
                        onClick={()=>{
                            this.props.bet(bet.id,false)
                        }}
                        type="button" className="btn btn-info mx-1">-</button>
                        <span className="text-success">{bet.point}</span>
                        <button 
                        onClick={()=>{
                            this.props.bet(bet.id,true)
                        }}
                        type="button" className="btn btn-info mx-1">+</button>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <section className="row">
                {this.renderBetList()}
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    betList: state.GourdCrabShrimpFishReducer.betList,
})

const mapDispatchToProps = (dispatch) => ({
    bet: (id,bool) => {
        dispatch(betAction(id,bool))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(BetListComponent);