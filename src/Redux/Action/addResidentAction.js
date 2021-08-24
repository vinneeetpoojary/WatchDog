import axios from "axios";

import {
    ADD_RESIDENT_SUCCESS,
    ADD_RESIDENT_FAILED,
    LOADING_ADD_RESIDENT,
    RESET_ADD_RESIDENT,
    ADD_RESIDENT_NETWORK_FAILURE
}from "../Types";
//reseting the form 
const resetresident=()=>{
    return{
        type:RESET_ADD_RESIDENT,
        info:"the resident form is reseted"
    };
}

const addResident=userData=>dispatch=>{
    //console.log(userData)
    dispatch({type:LOADING_ADD_RESIDENT});
    axios
        .post("")
        .then(res=>{
            switch(res.data.responseCode){
                case 200:
                    dispatch(success(res.data));
                    break;
                default :
                    dispatch(failed(res.data));
                    break;
            }
        })
        .catch(err=>{
            dispatch({type:ADD_RESIDENT_NETWORK_FAILURE,payload:err})
        });
}
function success(data){
    return{
        type:ADD_RESIDENT_SUCCESS,
        payload:data
        info:"Resident data is added"
    };
}
function failed(data){
    return{
        type:ADD_RESIDENT_FAILED,
        payload:data
        info:"Residents data adding failed"
    };
}
export {resetresident,addResident}