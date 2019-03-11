export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //
    dispatch({
      type: "CREATE_POST",
      post
    })
  }
};
