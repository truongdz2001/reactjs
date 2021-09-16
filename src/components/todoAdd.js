import React,{useState} from 'react'

const TodoAdd = () => {
    const[inputValue, setInputValue] = useState("");
    const onHandleSubmit = e =>{
        e.preventDefault();
    }
    const onHandleChange = (e) =>{
        setInputValue(e.target.value);
    }

    return (
        <div>
            {inputValue}
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} />
                    <button type="submit"> Add</button>
            </form>
        </div>
    )
}

export default TodoAdd
