
import Todoele from "./Todoele"
import {  useSelector } from "react-redux";

function Todolist(){

  const state = useSelector((state) => {
    return {
        array: state.array.array,
    };
  });
    return(
        <div>
            {state.array.map((ele,index)=><Todoele ele={ele} index={index}/>)}
        </div>
    )
}
export default Todolist;