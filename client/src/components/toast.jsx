import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
toast.configure()
 
function Toast(){
    const notify = ()=>{
        toast('Hello Geeks')
    }
    return (
        <div className="GeeksforGeeks">
            <button onClick={notify}>Click Me!</button>
            </div>
    );
}
  
export default Toast;