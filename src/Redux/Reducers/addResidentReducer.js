import{
    ADD_RESIDENT_SUCCESS,
    ADD_RESIDENT_FAILED,
    LOADING_ADD_RESIDENT,
    RESET_ADD_RESIDENT,
    ADD_RESIDENT_NETWORK_FAILURE
}from "../Types";

const initialState={
    isLoading:false,
    success:false,
    failed:false,
    network:false,
    data:{},
    message:"",
    networkError:""
};

export default (state=initialState,action)=>{
    switch(action.type){
        case LOADING_ADD_RESIDENT:
            return{
                ...state,
                isLoading:true,
                success:false,
                failed:false,
                network:false,
                data:{},
                message:"",
                networkError:""
            }
            case ADD_RESIDENT_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    success:true,
                    failed:false,
                    network:false,
                    data:action.payload,
                    message:"",
                    networkError:""
                }
            case ADD_RESIDENT_FAILED:
                return{
                    ...state,
                    isLoading:false,
                    success:false,
                    failed:true,
                    network:false,
                    data:action.payload,
                    message:"",
                    networkError:""
                }
            case ADD_RESIDENT_NETWORK_FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    success:false,
                    failed:false,
                    network:true,
                    data:action.payload,
                    message:"",
                    networkError:"Network Error"
                }
            case RESET_ADD_RESIDENT:
                return(state=initialState);
        default:
            return state;
    }
}
