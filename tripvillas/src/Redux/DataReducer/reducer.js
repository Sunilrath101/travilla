
import * as types from "./actionTypes"

 var obj= JSON.parse(localStorage.getItem("BookedData"))||{};
const intialData = {
  isLoading: false,
  isError: false,
  BookedData : obj,
};

export const reducer = (state = intialData, { type, payload }) => {
  switch (type) {
    case types.SendToLocalStorage : localStorage.setItem(("BookedData"),JSON.stringify(payload)); return state;
    

    case types.GetFromLocalStorage :
     var obj= JSON.parse(localStorage.getItem("BookedData"))||{};console.log(obj); return {
      ...state,BookedData:obj
    }

    default:
      return state;
  }
};
