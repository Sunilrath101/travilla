import * as types from "./actionTypes";
import axios from "axios";

import {
  AMENITIES,
  BATHROOMS,
  BEDROOMS,
  CITY,
  COMMON_AMENITIES,
  CURRENCY,
  IMAGE_COUNT,
  MAX_GUESTS,
  MEAL_PLAN,
  PETS_ALLOWED,
  POLICY,
  PROPERTY_QUANTITY,
  PROPERTY_TYPES,
  WEEKDAY,
  WEEKEND,
  IMAGE,
} from "./actionTypes";
import { saveData } from "../../utils/accesslocalStorage";
export const city = (payload) => {
  return { type: CITY, payload };
};

export const propertyType = (payload) => {
  return { type: PROPERTY_TYPES, payload };
};

export const propertyQuantity = (payload) => {
  return { type: PROPERTY_QUANTITY, payload };
};
export const maxGuests = (payload) => {
  return { type: MAX_GUESTS, payload };
};
export const bedrooms = (payload) => {
  return { type: BEDROOMS, payload };
};
export const bethrooms = (payload) => {
  return { type: BATHROOMS, payload };
};
export const amenities = (payload) => {
  return { type: AMENITIES, payload };
};
export const commonAmenities = (payload) => {
  return { type: COMMON_AMENITIES, payload };
};
export const petsAllowed = (payload) => {
  return { type: PETS_ALLOWED, payload };
};
export const imageCount = (payload) => {
  return { type: IMAGE_COUNT, payload };
};
export const currency = (payload) => {
  return { type: CURRENCY, payload };
};
export const weekday = (payload) => {
  return { type: WEEKDAY, payload };
};
export const weekend = (payload) => {
  return { type: WEEKEND, payload };
};
export const mealplan = (payload) => {
  return { type: MEAL_PLAN, payload };
};
export const policy = (payload) => {
  return { type: POLICY, payload };
};
export const image = (payload) => {
  return { type: IMAGE, payload };
};

// export const addData = (payload) => (dispatch) => {
//   return axios
//     .post("https://long-plum-mite-cape.cyclic.app/results", payload)
//     .then((res) => {
//       console.log(res.data);
//     });
// };

export const addData=(p)=>{
  saveData('create_property',p)
}

const sendDatatoLocal = (payload) => {

  return {
    type: types.SendToLocalStorage,
    payload,
  };
};

const getDatafromLocal = () => {
  return {
    type: types.GetFromLocalStorage,
  };
};

const getSingleHotel = (payload) => {
  console.log(payload)
  return {
    type : types.getHotelbyId,
    payload
  }
}

// HOTEL LIST REQUEST

const getHotelListReq = () => {
  return {
    type: types.getHotelListReq,
  };
};
const getHotelListSuc = (payload) => {
  return {
    type: types.getHotelListSuc,
    payload,
  };
};
const getHotelListErr = () => {
  return {
    type: types.getHotelListErr,
  };
};

const getData = (q, p) => (dispatch) => {
  dispatch(getHotelListReq())

  return axios

    .get(`https://long-plum-mite-cape.cyclic.app/results?q=${q}&_limit=7`, p)
    .then((res) => dispatch(getHotelListSuc(res.data)))
    .catch((err) => dispatch(getHotelListErr()));
};


export { sendDatatoLocal, getDatafromLocal, getHotelListErr, getHotelListReq, getHotelListSuc, getData,getSingleHotel }

