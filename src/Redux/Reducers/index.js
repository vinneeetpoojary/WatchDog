const { combineReducers } = require("redux");
const { default: addResident } = require("./addResidentReducer");

const appReducer=combineReducers({
    addResident:addResident,
})

const rootReducer=(state,action)=>{
    return appReducer(state,action)
}