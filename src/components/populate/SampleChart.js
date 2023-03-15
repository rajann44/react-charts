import { useState } from "react";
import Chart from "../funtionality/Chart";

export default function SampleChart(){
    
    const [data, setdata] = useState();

    const getChartData = async () => {
        const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
        const data = await res.json();
        console.log(data);
        setdata(data?.data);
    }
  
    
    return(<>
            <button className="btn btn-outline-secondary" onClick={getChartData} type="button" id="button-addon2">Populate</button>
            <Chart data={data}/>
    </>);
}