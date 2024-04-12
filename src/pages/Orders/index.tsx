import {
    Layout,
    // InvoiceModal,
    // Button
} from "@components/index"
import { useState, useEffect } from "react"
import OrderCard from "./components/orderCard"
import OrderDetails from "./components/orderDetails"
import "react-datepicker/dist/react-datepicker.css"
import { useOrders } from "@hooks/useOrder"
import { CgSpinner } from "react-icons/cg"
import { Items } from "../../types/api/order.types"
import { DatePickerInput, } from "@mantine/dates"
import dayjs from "dayjs"

const Orders = () => {
    const [active, setActive] = useState("")
    const [selected, setSelected] = useState<Items>()
    const [status, setStatus] = useState("")

    const [value, setValue] = useState<[Date | null, Date | null]>([null, null])

    const { isLoading, data } = useOrders({
        detailed: true,
        page: "all",
        ...(status && { status: status }),
        ...(value[0] &&value[1] && {
            dateFrom: dayjs(value[0]).format("YYYY-MM-DD"),
            dateTo: dayjs(value[1]).format("YYYY-MM-DD"),
        }),
    })

    useEffect(() => {
        if (data?.data.data.items) {
            setSelected(data.data.data.items[0])
        }
    }, [data?.data.data])
    return (
        <>
            {isLoading ? (
                <div className="h-screen w-full flex mt-24 justify-center">
                    <CgSpinner className="animate-spin text-blue-100 text-4xl" />
                </div>
            ) : (
                <Layout pageTitle="Orders">
                    <div className="flex h-screen">
                        <div className="w-[50%]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[20px] font-medium">
                                        Request
                                    </p>
                                    <p>View all orders</p>
                                </div>
                                <div className="flex gap-4">
                                    <p
                                        className={`${active === "all" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} bg-white-100 p-3  border-2 border cursor-pointer rounded-[5px]`}
                                        onClick={() => {
                                            setActive("all")
                                            setStatus("")
                                        }}
                                    >
                                        All
                                    </p>
                                    <p
                                        className={`${active === "pending" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} p-3  border-2 border cursor-pointer rounded-[5px]`}
                                        onClick={() => {
                                            setActive("pending")
                                            setStatus("pending")
                                        }}
                                    >
                                        Pending
                                    </p>

                                    <p
                                        className={`${active === "delivered" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} p-3  border-2 border cursor-pointer rounded-[5px] `}
                                        onClick={() => {
                                            setActive("delivered")
                                            setStatus("delivered")
                                        }}
                                    >
                                        Delivered
                                    </p>
                                    <p
                                        className={`${active === "completed" ? "  border-[#1F6FE32E] bg-[#206FE326]" : "bg-white-100 border-[#CFDBEB]"} p-3  border-2 border cursor-pointer rounded-[5px]`}
                                        onClick={() => {
                                            setActive("completed")
                                            setStatus("completed")
                                        }}
                                    >
                                        Completed
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-y-auto scrollbar mt-4 h-[70%]">
                                {data?.data.data.items.map((item, index) => (
                                    <OrderCard
                                        key={index}
                                        handleClick={() => setSelected(item)}
                                        data={item}
                                        color={
                                            selected === item
                                                ? "bg-[#206FE326]"
                                                : "bg-white-100"
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-[50%] ml-4">
                            <div className=" flex justify-end ">
                                {/* <DatePicker
                                    selected={startDate}
                                    onChange={(date: Date) =>
                                        setStartDate(date)
                                    }
                                    // minDate={new Date()}
                                    className="bg-white p-4 border border-[#CFDBEB] border-2 rounded-[5px]  w-[150px] mb-4"
                                    placeholderText="Date"
                                /> */}
                                <DatePickerInput
                                    type="range"
                                    //label="Pick dates range"
                                    placeholder="Pick dates"
                                    value={value}
                                    onChange={setValue}
                                    className="mb-4"
                                />
                            </div>

                            <OrderDetails data={selected} />
                        </div>
                    </div>
                </Layout>
            )}
        </>
    )
}

export default Orders
