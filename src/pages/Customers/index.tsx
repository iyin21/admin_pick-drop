import { Layout, InvoiceModal, Button } from "@components/index"
import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import CustomersTable from "./components/customerTable"
import { BsPlusCircleFill } from "react-icons/bs"
import { useLocation } from "react-router-dom"

const Customers = () => {
    let location = useLocation()
    const [opened, setOpened] = useState(false)

    return (
        <>
            <Layout pageTitle="Customers">
                <InvoiceModal opened={opened} setOpened={setOpened} id={""} />

                <div>
                    <div className="relative top-2  lg:bottom-0 ">
                        
                    </div>

                    <div className="relative">
                        <div className="flex justify-between mt-10">
                            <div className="ml-4">
                                <p className="absolute rounded-full  bg-[#060706] text-white-100 -ml-2 -mt-2 text-center w-7 h-7 pt-1">
                                    98
                                </p>
                                <Button className="rounded-[10px] p-4 bg-[#1F6FE340] border border-[#1F6FE3] text-[#1F6FE3]">
                                    Total Customers
                                </Button>
                            </div>
                            <div className="flex">
                               
                                <div className="pl-6">
                                    <p className="absolute rounded-full  bg-[#44934D] text-white-100 -ml-2 -mt-2 text-center w-7 h-7 pt-1">
                                        2
                                    </p>
                                    <Button className="rounded-[10px] p-4 bg-[#F3F6FB] border border-[#7F9395] text-[#7F9395]">
                                        Active
                                    </Button>
                                </div>
                                <div className="pl-6">
                                    <p className="absolute rounded-full  bg-[#060706] text-white-100 -ml-2 -mt-2 text-center w-7 h-7 pt-1">
                                        23
                                    </p>
                                    <Button className="rounded-[10px] p-4 bg-[#FF5C5C4F] border border-[#FCB20D] text-[#FCB20D]">
                                        Not Active
                                    </Button>
                                </div>
                            

                            <div className="rounded-[10px] border border-[#1F6FE3] flex bg-[#F3F6FB] cursor-pointer items-center ml-10">
                                <div className="border-r border-[#1F6FE3]">
                                    <p className="p-4  text-[#1F6FE3]">
                                        Filter by Date
                                    </p>
                                </div>
                                <span className="p-4 ">
                                    <AiFillCaretDown color="#1F6FE3" />
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-10 text-[17px] font-medium">
                        INDIVIDUALS - ALL CUSTOMERS
                    </p>
                    <div className="bg-white-100 p-4 px-2 rounded-[10px] mt-2">
                        <CustomersTable />
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Customers
