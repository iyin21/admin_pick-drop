
// const options = {
//     title: "Age vs. Weight comparison",
//     hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
//     vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
//     legend: "none",
// }

const TotalStatistics = () => {
    return (
        <div className="bg-white-100 rounded-[30px] p-6">
            <div className="flex border-b border-black-0 divide-x-2 gap-4 py-3 flex-wrap">
                <div className="text-brown-100 ">
                    <h1 className="font-bold">3,456</h1>
                    <p className="font-medium">
                        Total <br /> Customers
                    </p>
                </div>

                <div className=" pl-4 ">
                    <h1 className="font-bold text-[#188F73]">623KG</h1>
                    <p className="font-medium">
                        Total <br /> Orders
                    </p>
                </div>
                {/* <p className="text-black-70">|</p> */}
                <div className="pl-4 text-blue-100">
                    <h1 className="font-bold text-orange-100">476KG</h1>
                    <p className="font-medium ">
                        Total <br /> LPG Ordered
                    </p>
                </div>

                <div className="pl-4 text-red-100">
                    <h1 className="font-bold text-blue-100">₦2,600,000</h1>
                    <p className="font-medium">
                    Total <br /> Revenue
                    </p>
                </div>
                <div className="pl-4 text-red-100">
                    <h1 className="font-bold">3,400</h1>
                    <p className="font-medium">
                        Active <br /> Users
                    </p>
                </div>
                <div className="pl-4 text-red-100">
                    <h1 className="font-bold">20</h1>
                    <p className="font-medium">
                        Inactive <br /> Users
                    </p>
                </div>
            </div>
            
        </div>
    )
}
export default TotalStatistics
