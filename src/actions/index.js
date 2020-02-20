import axios from "axios";

export const GET_DATA = "GET_DATA";
export const UPDATE_DATA = "UPDATE_DATA"
export const SET_ERROR = 'SET_ERROR'

export const getData = () => dispatch => {
  dispatch({type: GET_DATA});
  axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
  .then(res => {console.log(res)
    dispatch({type: UPDATE_DATA, payload: res.data})
})
  .catch(err => console.log("The data was not returned", err))

}