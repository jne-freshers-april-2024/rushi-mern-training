import { useState } from 'react';
import './siDetails.css'
import Notification from './notification';

const SiDetails = (props)=>{
        const [showNotification,setShowNotification] = useState(false);

        const handleShowNotification = ()=>{
            setShowNotification(true);
            setTimeout(()=>{
                setShowNotification(false)
            },3000)
        }

        if(props.data.length === 0)
        {
            return(<h1>No History</h1>)
        }
        else
        {
            return(
                <div className='container'>
                    <h1>Calculated History :</h1>
                    <table className="table table-hover mt-3">
                        <thead class="table-dark">
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Principl (RS)</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Time(In Years)</th>
                            <th scope="col">Simple Interest</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.data.map((element,index)=>(
                                <tr key={index}>
                                    <th scope="row">{++index}</th>
                                    <td>{element.principle}</td>
                                    <td>{element.rate}</td>
                                    <td>{element.time}</td>
                                    <td>{element.si}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tr><button onClick={handleShowNotification} className='m-4 btn btn-primary'>Checkout History</button></tr>
                    </table>

                    {showNotification &&
                        <Notification
                            message = "Interest History Checkout Successfully..."
                            duration = {3000}
                            onClose = {()=>{setShowNotification(false)}}
                        />
                    }
                </div>
            );
        }
};

export default SiDetails;