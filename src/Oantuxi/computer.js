import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        return (
            <div className="computer">
                <button>

                    <div className="rectangle w-25 text-center keobuabao">

                        <img src={this.props.computer.hinhAnh} />

                    </div>
                </button>
                <div className="speech-bubble w-25 text-center"></div>
                <img src="./img/Oantuxi/playerComputer.png" className="w-25" />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer,

    }
}
export default connect(mapStateToProps, null)(Computer)