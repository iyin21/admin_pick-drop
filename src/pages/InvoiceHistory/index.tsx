import { Layout, InvoiceModal, Button } from "@components/index"
import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import InvoiceTable from "./components/invoiceTable"

const InvoiceHistory = () => {

    const [openInvoiceModal, setOpenInvoiceModal] = useState(false)
   
    const [id, setId] = useState("")


    

    return (
        <>
                <Layout pageTitle="Invoice History">
                    {openInvoiceModal && (
                        <InvoiceModal
                            opened={openInvoiceModal}
                            setOpened={setOpenInvoiceModal}
                            id={id}
                        />
                    )}
                   
                    
                            <div className="relative">
                                <div className="flex justify-between mt-10">
                                    <div className="flex">
                                        <div>
                                            <p className="absolute rounded-full  bg-[#060706] text-white-100 -ml-2 -mt-2 text-center w-7 h-7 pt-1">
                                                98
                                            </p>
                                            <h5 className="rounded-[10px] p-4 px-8 border border-[#1F6FE3] text-[#1F6FE3]">
                                                Token
                                            </h5>
                                        </div>
                                        <div className="ml-4">
                                            <p className="absolute rounded-full  bg-[#44934D] text-white-100 -ml-2 -mt-2 text-center w-7 h-7 pt-1">
                                                98
                                            </p>
                                            <h5 className="rounded-[10px] p-4  border border-[#44934D] text-[#44934D]">
                                                RE Remittance
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="rounded-[10px] border border-[#1F6FE3] flex bg-[#F3F6FB] cursor-pointer items-center">
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
                            <p className="mt-10 text-[14px] font-medium">
                                PICK & DROP INVOICES
                            </p>
                            <div className="bg-white-100 p-4 px-2 rounded-[10px] mt-2">
                                <InvoiceTable
                                    setOpenModal={setOpenInvoiceModal}
                                    
                                    setId={setId}
                                />
                                
                            </div>
                    
                        
                            

                            
                        
                </Layout>
            
        </>
    )
}

export default InvoiceHistory
