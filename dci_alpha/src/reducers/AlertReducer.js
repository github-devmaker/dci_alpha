const initialState = {
    message:'ทดสอบใช้ message',
    state:'-'
}
const AlertReducer = (state = initialState,action) => {
    switch(action.type){
        case 'show':
            return state.concat([action.data]);
        default:
            return state;
    }
}
export default AlertReducer;