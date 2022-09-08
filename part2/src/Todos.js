import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

function Todos() {

    const FORM_INIT = {newTodo: ''};
    const todosArr = useSelector(store => store.todos);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(FORM_INIT);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))}

    const handleNewTodo = evt => {
        evt.preventDefault();
        
        dispatch({
            type: "ADD",
            payload: formData.newTodo
        })
        setFormData(FORM_INIT);
        console.log(formData)
    }

    const handleRemove = (idx) => {
        dispatch({
            type: "REMOVE",
            payload: idx
        })


    }
   
    return(<div>
        <ul>
        {todosArr.map((todo, i)=> <li>{todo}<button onClick = {() => handleRemove(i)}>Remove this todo</button></li>)}
        </ul>

        <form onSubmit = {handleNewTodo}>
            <input name = "newTodo" value = {formData.newTodo}onChange = {handleChange} placeholder = "New To-Do"></input>
            <button>Submit</button>
        </form>

    </div>)
}

export default Todos;