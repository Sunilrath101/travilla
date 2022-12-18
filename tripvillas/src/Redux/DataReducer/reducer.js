import {
  AMENITIES,
  BATHROOMS,
  BEDROOMS,
  CITY,
  COMMON_AMENITIES,
  CURRENCY,
  IMAGE,
  IMAGE_COUNT,
  MAX_GUESTS,
  MEAL_PLAN,
  PETS_ALLOWED,
  POLICY,
  PROPERTY_QUANTITY,
  PROPERTY_TYPES,
  WEEKDAY,
  WEEKEND,
} from "./actionTypes";

const intialData = {
  city: "delhi",
  propertyType: "",
  propertyQuantity: "",
  maxGuests: 1,
  bedrooms: 1,
  bethrooms: 1,
  amenities: [],
  commonAmenities: [],
  petsAllowed: false,
  imageCount: 0,
  currency: "",
  weekday: "",
  weekend: "",
  mealplan: "",
  policy: "",
  image: [],
};

export const reducer = (state = intialData, { type, payload }) => {
  switch (type) {
    case IMAGE:
      return { ...state, image: payload };
    case CITY:
      return { ...state, city: payload };
    case PROPERTY_TYPES:
      return { ...state, propertyType: payload };
    case PROPERTY_QUANTITY:
      return { ...state, propertyQuantity: payload };
    case MAX_GUESTS:
      return { ...state, maxGuests: payload };
    case BEDROOMS:
      return { ...state, bedrooms: payload };
    case BATHROOMS:
      return { ...state, bethrooms: payload };
    case AMENITIES:
      return { ...state, amenities: payload };
    case COMMON_AMENITIES:
      return { ...state, commonAmenities: payload };
    case PETS_ALLOWED:
      return { ...state, petsAllowed: payload };
    case IMAGE_COUNT:
      return { ...state, imageCount: payload };
    case CURRENCY:
      return { ...state, currency: payload };
    case WEEKDAY:
      return { ...state, weekday: payload };
    case WEEKEND:
      return { ...state, weekend: payload };
    case MEAL_PLAN:
      return { ...state, mealplan: payload };
    case POLICY:
      return { ...state, policy: payload };
    default:
      return state;
  }
};
