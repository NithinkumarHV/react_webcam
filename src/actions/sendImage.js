import axios from "axios";

const SET_ISMATCHED_TRUE = "SET_ISMATCHED_TRUE";

export const sendImage = (imgData) => (dispatch) => {
  console.log(imgData);
  axios
    .post("https://api/endpoint", imgData)
    .then((res) => {
      if (res.data === true) {
        //response true here corresponds to the images being matched.
        dispatch({
          type: SET_ISMATCHED_TRUE, // based on the this response as true; isMatched in the redux state is set to true based on which the capturing of screenshots are stopped.
          payload: true,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
