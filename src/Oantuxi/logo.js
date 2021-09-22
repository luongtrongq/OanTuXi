import React, { Component } from 'react'
import { connect } from 'react-redux'

class Logo extends Component {
    render() {

        return (
            <div>
                <p className="row0 row1">{this.props.ketQua}</p>
                <p className="row0 row2">Tổng số bàn thắng:{this.props.soBanThang} </p>
                <p className="row0 row3">Tổng số bàn đã chơi: {this.props.soBanChoi}</p>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ketQua: state.BaiTapOanTuXiReducer.ketQua,
        soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
        soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
    }
}
export default connect(mapStateToProps, null)(Logo)