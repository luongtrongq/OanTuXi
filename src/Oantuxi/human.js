import React, { Component } from 'react'
// import './Oantuxi.css'
import { connect } from "react-redux"
class Human extends Component {




    render() {


        return (
            <div>
                <div className="human text-center">
                    <button>
                        <div className="rectangle text-center keobuabao">
                            <img src={this.props.mangDatCuoc.find((value) => {
                                return value.datCuoc === true;
                            }).hinhAnh} />

                        </div>
                    </button>

                    <div className="speech-bubble w-25 text-center">
                        {/* <img className="./Oantuxi/" /> */}
                    </div>
                    <img src="./img/Oantuxi/player.png" className="w-25" />
                </div>
                <div className=" row">
                    {this.props.mangDatCuoc.map((item) => {
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: "5px solid orange" }
                        }
                        return <div className=" keobuabao col-4">
                            <button onClick={() => { this.props.changeImage(item.ma) }
                            } style={border}  >
                                <img src={item.hinhAnh} className="" />
                            </button>
                        </div>
                    })}
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        changeImage: (item) => {
            const action = {
                type: "renderDatCuoc",
                payload: item
            }
            dispatch(action)
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Human)
