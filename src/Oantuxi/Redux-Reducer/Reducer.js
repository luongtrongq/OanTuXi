// import computer from "../computer"

// import { act } from "react-dom/test-utils"
const stateDefault = {
    mangDatCuoc: [
        { ma: "keo", hinhAnh: "./img/Oantuxi/keo.png", datCuoc: true },
        { ma: "bao", hinhAnh: "./img/Oantuxi/bao.png", datCuoc: false },
        { ma: "bua", hinhAnh: "./img/Oantuxi/bua.png", datCuoc: false }
    ],
    ketQua: "Chiến nào!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: "keo", hinhAnh: "./img/Oantuxi/keo.png" },
}
const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "renderDatCuoc":
            {
                let mangCuoc = [...state.mangDatCuoc]

                mangCuoc = mangCuoc.map((item) => {
                    if (item.ma === action.payload) {
                        return { ...item, datCuoc: true }
                    }
                    return { ...item, datCuoc: false }
                })
                state.mangDatCuoc = mangCuoc


                return { ...state }
            }
        case "RANDOM": {
            // console.log(action.payload)
            const numberRandom = Math.floor(Math.random() * 3);
            const item = state.mangDatCuoc[numberRandom]
            state.computer = item;
            return { ...state }
        }
        case "SOSANH": {
            const human = state.mangDatCuoc.find((item) => {
                return item.datCuoc === true;
            })
            const comp = state.computer;
            state.soBanChoi++
            switch (human.ma) {
                case "keo": {
                    if (comp.ma === "keo") {
                        state.ketQua = "Hoà nha"
                    }
                    else if (comp.ma === "bua") {
                        state.ketQua = "Thua đó"
                    }
                    else if (comp.ma === "bao") {

                        state.ketQua = "Thắng nha"
                        state.soBanThang++
                    } break;
                }
                case "bua": {
                    if (comp.ma === "keo") {
                        state.ketQua = "Thắng nha"
                        state.soBanThang++

                    }
                    else if (comp.ma === "bua") {
                        state.ketQua = "Hoà nha"
                    }
                    else if (comp.ma === "bao") {
                        state.ketQua = "Thua đó"
                    } break;
                }
                case "bao": {
                    if (comp.ma === "keo") {
                        state.ketQua = "Thua đó"
                    }
                    else if (comp.ma === "bua") {
                        state.ketQua = "Thắng nha"
                        state.soBanThang++
                    }
                    else if (comp.ma === "bao") {
                        state.ketQua = "Hoà nha"
                    } break;
                }
                default: state.ketQua = "Helo mấy cưng"
            }
            return { ...state }
        }


        default: return { ...state }
    }
}
export default BaiTapOanTuXiReducer;