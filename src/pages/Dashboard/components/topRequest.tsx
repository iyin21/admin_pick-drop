import { Chart } from "react-google-charts"
//import { Data } from "../../../types/api/dashboard.type"

//
export const options = {
    pieHole: 0.5,
    is3D: false,
    colors:["#D7F4E2", "#02C39A", "#F0F3BD", "#1F6FE3", "#FF6663", "#C2AFF0",],
    backgroundColor:"#FCF9F9",
    //legend: 'none',
    //legend:{position:"labeled"},
    pieSliceText: 'value',
    pieStartAngle: 100,
    chartArea:{top:20,width:'100%',height:'100%'}
    //chartArea:{left:10,width:'100%', right:20},
}



const TopRequest=()=>{
    const data = [
        ["Volume", "Total"],
        ["Volume1", 12,],
        ["Volume2", 6],     
        ["Volume3", 20],     
        ["Volume4", 50],     
        ["Volume5", 12.5],     
        ["Volume6", 10],        
        
    ]
    return(
        <div className="border p-2 mt-2">
           <Chart
                chartType="PieChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
        </div> 
    )
}

export default TopRequest;