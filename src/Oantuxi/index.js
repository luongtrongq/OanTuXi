import React, { Component } from 'react'
import Computer from './computer'
import Human from './human'
import Logo from './logo'
import "./Oantuxi.css"
import { connect } from 'react-redux'
class Oantuxi extends Component {
    render() {
        return (
            <div className="OantuxiGame pt-3">
                <div className="row text-center mt-2">
                    <div className="col-4">
                        <Human />
                    </div>
                    <div className="col-4">

                        <Logo />
                        <button className="btn btn-success" onClick={() => {
                            this.props.random()
                        }}> Play game</button>
                    </div>

                    <div className="col-4">

                        <Computer />
                    </div>

                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        random: () => {
            let count = 0;
            let change = setInterval(() => {
                const action = {
                    type: "RANDOM",

                }
                dispatch(action)
                count++;
                if (count > 10) {
                    clearInterval(change)
                    const action1 = {
                        type: "SOSANH"
                    }
                    dispatch(action1)
                }
            }, 100)

        }
    }
}

export default connect(null, mapDispatchToProps)(Oantuxi)