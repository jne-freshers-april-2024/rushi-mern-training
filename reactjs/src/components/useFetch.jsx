import { useEffect,useState } from "react";

const useFetch = (url)=>{
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch(url);
                console.log("Response:",response)
                if(!response.ok)
                    throw new Error("Something Went Wrong")
                const result = await response.json()
                console.log("Result:",result)
                setData(result)
                
            }
            catch(error)
            {
                setError(error.message);
            }
            finally
            {
                setLoading(false);
            }
        }
        fetchData();
    },[url]);

    console.log("data:",data,"\nLoading",loading,"\nError:",error)
    return {data,loading,error};
}

export default useFetch;