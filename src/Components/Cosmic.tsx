import CosmicForm from "./CosmicForm";
import { useEffect, useState } from "react";


const Cosmic = () =>{
    const numberToWords = require('number-to-words'); // I tried making an algorithm for this. LOL!!!
    let tempArray :any = [];
    const [numberArray, setNumberArray] = useState([""]);
    useEffect(() => setNumberArray([]), []
    )
    function gotoCosmic(num : any){
        const word : string= numberToWords.toWords(num);
        tempArray.push(word)
        if (num == 4){
            console.log(word);
            console.log("Cosmic")
    }
        else{
            console.log(word);
            gotoCosmic(word.length)
        }
    }
    const addNumber = (myNumber : any) =>{
        if (!myNumber.text) return
        if (parseInt(myNumber.text) == NaN) return
        gotoCosmic(parseInt(myNumber.text))
        console.log(tempArray)
        setNumberArray(tempArray)
        tempArray = []
    }
    return (
        <div className="cosmic">
        <ul>
           {numberArray.map((num : any) => {
            return <li className="list">{num}</li>
           })}
        </ul>
        <CosmicForm onSubmit={addNumber}/>
        </div>
    )
}

export default Cosmic;