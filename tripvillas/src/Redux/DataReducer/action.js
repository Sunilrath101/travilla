
import * as types from "./actionTypes"

const sendDatatoLocal = (payload) => {
  return {
    type : types.SendToLocalStorage,
    payload
  }
}

const getDatafromLocal = () => {
  return {
    type : types.GetFromLocalStorage
  }
}

export { sendDatatoLocal,getDatafromLocal }