export const contactReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_CONTACT':
            return[action.newContact,...state];

        case 'DELETE_CONTACT':
        if(window.confirm("Are you really want to delete this contact?")){
            const filtered=state.filter(contact=>contact.id !==action.id);
            return filtered;
        }
        default:
            return state;
    }
}