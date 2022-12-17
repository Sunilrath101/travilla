
import * as types from "./actionTypes"

var obj = JSON.parse(localStorage.getItem("BookedData")) || {};
const intialData = {
  isLoading: false,
  isError: false,
  BookedData: obj,
  hotelList: "",
};

export const reducer = (state = intialData, { type, payload }) => {
  switch (type) {
    case types.SendToLocalStorage: localStorage.setItem(("BookedData"), JSON.stringify(payload)); return state;


    case types.GetFromLocalStorage:
      var obj = JSON.parse(localStorage.getItem("BookedData")) || {}; console.log(obj); return {
        ...state, BookedData: obj
      }

    // GET HOTEL LIST 

    case types.getHotelListReq:
      return { ...state, isLoading: true }

    case types.getHotelListSuc:
      return { ...state, isLoading: false, hotelList: payload }

    case types.getHotelListErr:
      return { ...state, isLoading: false, isError: true }

    default:
      return state;
  }
};