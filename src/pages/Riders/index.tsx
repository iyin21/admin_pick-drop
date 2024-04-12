import { Layout, Pagination } from "@components/index"
import RiderTable from "./components/riderTable"
import { useState } from "react"
import { BsPlusCircleFill } from "react-icons/bs"
import AddRiderDrawer from "./components/addRiderDrawer"
import { useRiders } from "@hooks/useRider"
import { CgSpinner } from "react-icons/cg"

const Rider = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [page, setPage] = useState(1)

    const { isLoading, data } = useRiders({ page, size: 25 })
    return (
        <>
            {isLoading ? (
                <div className="h-screen w-full flex mt-24 justify-center">
                    <CgSpinner className="animate-spin text-blue-100 text-4xl" />
                </div>
            ) : (
                <Layout pageTitle="Rider Management">
                    <AddRiderDrawer
                        openAddRiderDrawer={openDrawer}
                        setOpenAddRiderDrawer={setOpenDrawer}
                    />
                    <div
                        className="flex justify-end items-center cursor-pointer"
                        onClick={() => setOpenDrawer(true)}
                    >
                        <BsPlusCircleFill color="#40D57B" size="22px" />
                        <h4 className="text-[#3E3E3E] ml-2">Add Rider</h4>
                    </div>
                    <div className="bg-white-100 p-4 px-2 rounded-[10px] mt-2">
                        <RiderTable data={data?.data.items||[]} />
                        <Pagination
                                page={page}
                                total={data?.data.total_pages || 0}
                                onChange={(pageNumber) => setPage(pageNumber)}
                                recordPerpage={25}
                                boundaries={1}
                                totalRecords={data?.data.total_items || 0}
                                // count={paginatedData?.length || 0}
                            />
                    </div>
                </Layout>
            )}
        </>
    )
}

export default Rider
