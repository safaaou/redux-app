const initialState = {
    btn_radio: '',
    check: [],
    name: '',
    email: '',
    phone: ''
  };

const data_Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHOOSE_TYPE': 
            return {
                ...state,
                btn_radio: action.btn_radio
            }
        case 'CHOOSE_CATEGORY': 
            return {
                ...state,
                check: action.check
            }
        case 'CHOOSE_NAME': 
            return {
                ...state,
                name: action.name
            }
        case 'CHOOSE_EMAIL': 
            return {
                ...state,
                email: action.email
            }
        case 'CHOOSE_PHONE': 
            return {
                ...state,
                phone: action.phone
            }
        default:
            return state;

    };

}

export default data_Reducer;