const INITIAL_STATE = { data: {topText: 'a test', 
imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/CBC_Logo_1992-Present.svg/1024px-CBC_Logo_1992-Present.svg.png',
 bottomText: 'for this'} };

function rootReducer(state = INITIAL_STATE, action){

    switch(action.type) {

        case "ADD":
            return {...state, data: {topText: action.memeData.top, imgSrc: action.memeData.img, bottomText: action.memeData.bottom}}
        case "REMOVE":
            return {...state, data: {topText: '', imgSrc: '', bottomText: ''}}
        default:
            return state;

    }

}

export default rootReducer;