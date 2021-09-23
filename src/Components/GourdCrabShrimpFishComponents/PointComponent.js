import React, { Component } from 'react';
import { connect } from 'react-redux';

class PointComponent extends Component {
    render() {
        return (
            <section className="text-center">
                <h3 
                style={{
                    borderRadius: "10px",
                    border: "5px solid #000",
                }}
                className = "p-1 bg-warning"
                >Điểm thưởng:  
                    <span className="text-success"> {this.props.point}</span>
                </h3>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    point: state.GourdCrabShrimpFishReducer.point,
})

export default connect(mapStateToProps)(PointComponent);