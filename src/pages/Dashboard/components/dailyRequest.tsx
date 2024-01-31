import { Chart } from "react-google-charts"

const data = [
    ["Day", "Daily Request"],
    ["M", 15500],
    ["T", 9000],
    ["W", 20000],
    ["T", 22978],
    ["F", 11000,],
    ["S", 14000],
    ["S", 16000],
    
]
const options = {
    colors: ["#BCE0CA"],
    legend: { position: "none" },
    bar: { groupWidth: '20%' },
    backgroundColor:"#FCF9F9",
    border:"red",
    borderWidth:4,

    //areaOpacity: 0.2,
    vAxis: {
        animate: { startup: true, easing: "in" },
        minValue: 0,
        maxValue: 25000,
        // format: { format: "none" },
        //gridlines: { color: "#6B7A99",  },
        textStyle: { color: "#7F9395", fontName: "Roboto" },
    },
    hAxis: {
        gridlines: { color: "transparent" },
        textStyle: { color: "#7F9395", fontName: "Roboto" },
    },
    chartArea: { left: 30, width: "100%", right: 20 },
}

const DailyRequest=()=>{
    return(
        <div>
            <Chart
                width="100%"
                height="100%"
                data={data}
                options={options}
                chartType="ColumnChart"
            />
        </div>
    )
}

export default DailyRequest;