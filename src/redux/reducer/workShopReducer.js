const initialState = {
  workOn: [],
};

// POST_ERROR

const workShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WORK":
      return { ...state, workOn: [...state.workOn, action.payload] };
    case "DELETE_WORK":
      return {
        ...state,
        workOn: [
          ...state.workOn.filter((item, index) => index !== action.payload),
        ],
      };
    case "EDIT_WORK":
      const newValues = state.workOn.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            workName: action.payload.workName,
          };
        }
        return item;
      });
      return { ...state, workOn: newValues };
    case "CHANGE_COMPLETE":
      const newStateValues = state.workOn.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            isComplete: action.payload.isComplete,
          };
        }
        return item;
      });
      return { ...state, workOn: newStateValues };
    default:
      return state;
  }
};

export default workShopReducer;
