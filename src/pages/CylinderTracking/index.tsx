import { Layout, Cylinder } from "@components/index"
import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import CylinderTrackingTable from "./components/cylinderTrackingTable"
import { BsPlusCircleFill } from "react-icons/bs"
import AddCylinderDrawer from "./components/addCylinder"

const CylinderTracking = () => {
    const [openCylinder, setOpenCylinder] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [id, setId] = useState("")

    return (
        <>
            <Layout pageTitle="Cylinder Tracking">
                {openCylinder && (
                    <Cylinder
                        opened={openCylinder}
                        setOpened={setOpenCylinder}
                        id={id}
                    />
                )}
                <AddCylinderDrawer
                    openAddCylinderDrawer={openDrawer}
                    setOpenAddCylinderDrawer={setOpenDrawer}
                />
                <div className="relative">
                    <div className="flex justify-between mt-10">
                        <div className="flex">
                            <div>
                                <p className="absolute rounded-full  bg-[#060706] text-white-100 -ml-2 -mt-2 text-center w-7 h-7 pt-1">
                                    98
                                </p>
                                <h5 className="rounded-[10px] p-4 px-8 border border-[#1F6FE3] text-[#1F6FE3]">
                                Drop-off
                                </h5>
                            </div>
                            <div className="ml-4">
                                <p className="absolute rounded-full  bg-[#44934D] text-white-100 -ml-2 -mt-2 text-center w-7 h-7 pt-1">
                                    98
                                </p>
                                <h5 className="rounded-[10px] p-4  border border-[#44934D] text-[#44934D]">
                                Pick-up
                                </h5>
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

                        <div
                            className="flex justify-end items-center cursor-pointer"
                            onClick={() => setOpenDrawer(true)}
                        >
                            <BsPlusCircleFill color="#1F6FE3" size="22px" />
                            <h4 className="text-[#3E3E3E] ml-2">
                                Add Cylinder
                            </h4>
                        </div>
                    </div>
                </div>
                <p className="mt-10 text-[14px] font-medium">ALL CYLINDERS</p>
                <div className="bg-white-100 p-4 px-2 rounded-[10px] mt-2">
                    <CylinderTrackingTable
                        setOpenModal={setOpenCylinder}
                        setId={setId}
                    />
                </div>
            </Layout>
        </>
    )
}

export default CylinderTracking
