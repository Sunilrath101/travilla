const intialData = {
  isLoading: false,
  isError: false,
};

export const reducer = (state = intialData, { type, payload }) => {
  switch (type) {
    case "value":
      return state;

    default:
      return state;
  }
};
