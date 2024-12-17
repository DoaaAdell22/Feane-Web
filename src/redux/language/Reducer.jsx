const initialState ={
    language : localStorage.getItem('language')??'en'
}

const ReducerLanguage = (state = initialState , action) =>{
    switch(action.type){
        case 'SET_LANG' : 
        localStorage.setItem('language ' , action.payload)
        return{
            language : action.payload
        };
        default:
            return state;
    }
}

export default ReducerLanguage