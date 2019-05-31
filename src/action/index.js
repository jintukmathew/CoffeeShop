
import axios from 'axios';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE_ITEM_DATA = 'UPDATE_ITEM_DATA';



export function addToCart(item) {
    return {
        type : ADD,
        item                                // this is same as newItem : newItem in ES6
    }
}

export function removeFromCart(item) {
    return {
        type : REMOVE,
        item
    }
}

const ItemUpdation = data => ({
  type: UPDATE_ITEM_DATA,
  item:data,
});


export const fetchItems = (data) => (dispatch, getState) => {
    dispatch(fetchItemsCall(data)).then((response) => {
      if(response){
        dispatch(ItemUpdation(response));
      }
    });
    //console.log(data);
  };

  export const fetchItemsCall = (data) => (_dispatch, getState) => {
    return axios
      .get(`https://api.myjson.com/bins/7vg0j`, data)
      .then(response => response.data)
      .catch(error => alert('item fetch failed'));
  };
