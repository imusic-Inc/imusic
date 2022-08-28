
import { useState, useEffect } from "react";
let end = 0;
function Progress(props) {
    const [start, setStart] = useState(0.0);
    if (props.track[props.index]) {
         if ( props.track &&  end !== props.track[props.index].length) {
        end = props.track[props.index].length;
        setStart(0);
    }


    

    }
    function count() {
        if (props.track[props.index]) {
       const myInterval =  setInterval(() => {
            setStart(start + 10000);   
       }, 10000)  
            
            if (start >= props.track[props.index].length) {
                clearInterval(myInterval);
                setStart(0);
            }
            
        }    
   }
    
    useEffect(count);
    return (<div className="flex-row flex-center ">
    <div className="pr-1">{String(Number(start)/(1000*60)).substring(0,5)}</div>
    <div className="progress-contaner btn">
        <div className="progress" style={{width:  props.track[props.index]?((Number(start)/Number(props.track[props.index].length))*100)+'%':'0px'}}></div>
    </div>
    <div className="pl-1">{ props.track.length > 0?String(Number(props.track[props.index].length)/(1000*60)).substring(0,5):0.0 }</div>
</div>)
}
export default Progress;