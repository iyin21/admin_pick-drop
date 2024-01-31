import { Layout, InvoiceModal, Button } from "@components/index"
import { useState } from "react"
import OrderCard from "./components/orderCard"
import OrderDetails from "./components/orderDetails"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Orders = () => {
    const [active, setActive] = useState("")
    const [selected, setSelected] = useState<string>("")
    const [startDate, setStartDate] = useState(new Date())

    return (
        <Layout pageTitle="Orders">
            <div className="flex">
                <div className="w-[50%]">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-[20px] font-medium">Request</p>
                            <p>View all orders</p>
                        </div>
                        <div className="flex gap-4">
                            <p
                                className={`${active === "all" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} bg-white-100 p-3  border-2 border cursor-pointer rounded-[5px]`}
                                onClick={() => setActive("all")}
                            >
                                All
                            </p>
                            <p
                                className={`${active === "pending" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} p-3  border-2 border cursor-pointer rounded-[5px]`}
                                onClick={() => setActive("pending")}
                            >
                                Pending
                            </p>
                            <p
                                className={`${active === "dispatch" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} p-3  border-2 border cursor-pointer rounded-[5px]`}
                                onClick={() => setActive("dispatch")}
                            >
                                Dispatch
                            </p>
                            <p
                                className={`${active === "delivered" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} p-3  border-2 border cursor-pointer rounded-[5px] `}
                                onClick={() => setActive("delivered")}
                            >
                                Delivered
                            </p>
                        </div>
                    </div>

                    <div className="overflow-y-auto scrollbar mt-4 h-[70%]">
                        {new Array(6).fill(10).map((_, index) => (
                            <OrderCard
                                key={index}
                                handleClick={() => setSelected(String(index))}
                                color={
                                    selected === String(index)
                                        ? "bg-[#206FE326]"
                                        : "bg-white-100"
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className="w-[50%] ml-4">
                    <div className=" flex justify-end ">
                        <DatePicker
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            // minDate={new Date()}
                            className="bg-white p-4 border border-[#CFDBEB] border-2 rounded-[5px]  w-[150px] mb-4"
                            placeholderText="Date"
                        />
                    </div>

                    <OrderDetails />
                </div>
            </div>
        </Layout>
    )
}

export default Orders
