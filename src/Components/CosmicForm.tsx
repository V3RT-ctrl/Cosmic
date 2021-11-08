import { useState } from "react";

const CosmicForm = (props : any) => {
    const [input, setInput] = useState('');
    const handleSubmit = (e :any) => {
        e.preventDefault()
        console.log(e)
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput("")
    }
    const handleChange = (e:any) => {
        setInput(e.target.value)
    }
        return (        
            <>
        <form onSubmit={handleSubmit}>
            <label>Input A Number! </label>
            <input type="text" value={input} onChange={handleChange}/>
            <input type="submit" />
        </form>
        </>
        )
}

export default CosmicForm;