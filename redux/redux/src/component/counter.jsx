
import { useSelector } from "react-redux"; // is the library to get the state from the store 
const Counter = () => {
    const count = useSelector(state => state); //state is the store state=>state means return the state 
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;