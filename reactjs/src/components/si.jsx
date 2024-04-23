import { useRef, useState,useEffect} from 'react';
import './si.css';
import 'bootstrap/dist/css/bootstrap.css'
import SiDetails from './siDetails';

const SI = ()=>{
    const inputRef = useRef(null);
    const [principle,setPrinciple] = useState();
    const [rate,setRate] = useState();
    const [time,setTime] = useState();
    const [history,setHistory] = useState([]);

    useEffect(()=>{         
        if(inputRef.current)            // useRef
            inputRef.current.focus()            // automatically focus the input element when component mounts
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
            const his = {
                principle : principle,
                rate : rate,
                time : time,
                si: principle*rate*time/100
            }
            
        history.push(his);
        setHistory([...history]);
        setPrinciple('');
        setTime('');
        setRate('');
        console.log(history);
    }

    return(
        <>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <div className="gradient-background">
                    <h3 className="text-center">Simple Interest Calculator</h3>

                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="principle">Enter Principle :</label>
                        <input onChange={()=>{setPrinciple(document.getElementById('principle').value)}} 
                        type="number" ref={inputRef} value={principle} className="form-control" id="principle" placeholder="Enter Principle"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate">Enter Rate:</label>
                        <input onChange={()=>{setRate(document.getElementById('rate').value)}} 
                        type="number" value={rate} className="form-control" id="rate" placeholder="Enter Rate"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Enter Time:</label>
                        <input onChange={()=>{setTime(document.getElementById('time').value)}} type="number" className="form-control" 
                        id="time" value={time} placeholder="Enter Time"></input>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3 p-2">Calculate Interest</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <SiDetails data = {history}/>
        </>
    )
}

export default SI;