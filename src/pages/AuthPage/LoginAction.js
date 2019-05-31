import axios from 'axios';
import history from '../../common/history';

export const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

const userDataUpdation = data => ({
  type: UPDATE_USER_DATA,
  data,
});


export const login = (data) => (dispatch, getState) => {
    dispatch(loginCall(data)).then((response) => {
      if(response){
        dispatch(userDataUpdation(response));
        history.push('/home')
      }
    });
    //console.log(data);
  };

  export const loginCall = (data) => (_dispatch, getState) => {
    return axios
      .get(`https://api.myjson.com/bins/12wzf3`, data)
      // this call should be post call and genereate tocken from there.
      .then(response => response.data)
      .catch(error => alert('authentication failed'));
  };