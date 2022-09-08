import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./memeGenerator.css";

function MemeGenerator() {


const INIT_STATE = {topText: '', img: '', bottomText: ''};
const meme = useSelector(store => store.data)
const dispatch = useDispatch();
const [formData, setFormData] = useState(INIT_STATE);


const handleChange = evt => {
    const {name, value} = evt.target;
    setFormData(fData => ({...fData,
    [name]: [value]}))
}

const handleNewMeme = evt => {
    evt.preventDefault();
    dispatch({type: "ADD",
                memeData: {top: formData.topText, img: formData.img, bottom: formData.bottomText}})
    setFormData(INIT_STATE);
}

const handleRemoveMeme = evt => {
    evt.preventDefault();
    dispatch({type: "REMOVE"})
    setFormData(INIT_STATE);
}

return(
    <div>
        
        <div className="meme-div">
        <div className="top-text-div">
        <h2>{meme.topText}</h2>
        </div>
        
        <img className="meme-img" src = {meme.imgSrc}></img>
        
        <div className="bottom-text-div">
        <h2>{meme.bottomText}</h2>
        </div>
        </div>

        <form onSubmit ={handleNewMeme}>
        <input type = "text" name="topText" value ={formData.topText} placeholder="Enter top text" onChange = {handleChange}></input>
        <input type = "text" name="img" value ={formData.img} placeholder="Enter img" onChange = {handleChange}></input>
        <input type = "text" name="bottomText" value ={formData.bottomText} placeholder="Enter bottom text" onChange = {handleChange}></input>
        <button>New Meme</button>
        </form><br></br>
        <form onSubmit = {handleRemoveMeme}>
            <button>Remove meme</button>
        </form>
       

    </div>


)


}

export default MemeGenerator;