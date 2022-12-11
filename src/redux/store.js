import { createStore } from "redux";
import addressData from "../addressData";
const initailState = addressData.properties;
const val = ''
const addressReducer = function (state = {val ,isShown:false, initailState}, action) {

  if (action.type === "submit") {
    const Newstate = {
        ...state,
        initailState:addressData.properties
    }
    const filtered = Newstate.initailState.filter((property) =>
      property.address.toLowerCase().includes(action.value.toLowerCase())
    );
    return {val:action.value,initailState:filtered, isShown:true};
  }
  return {val,initailState, isShown:state.isShown};
  
};

const store = createStore(addressReducer);

export default store;
