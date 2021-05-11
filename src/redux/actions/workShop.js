export const addWork = (work) => {
  console.log("workworkworkwork", work);
  return {
    type: "ADD_WORK",
    payload: work,
  };
};

export const deleteWork = (index) => {
  return {
    type: "DELETE_WORK",
    payload: index,
  };
};

export const editWork = (work) => {
  return {
    type: "EDIT_WORK",
    payload: work,
  };
};

export const changeIsComplete = (work) => {
  return {
    type: "CHANGE_COMPLETE",
    payload: work,
  };
};
