import { Layout, Pagination } from "@components/index"
import { useState } from "react"
import { BsPlusCircleFill } from "react-icons/bs"
import UserManagementTable from "./components/userManagementTable"
import AddUserDrawer from "./components/addUserDrawer"

import { CgSpinner } from "react-icons/cg"
import { useStaffs } from "@hooks/useUsers"

const UserManagement = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [page, setPage] = useState(1)

    const { data, isLoading } = useStaffs({})
        

    return (
        <>
         {isLoading ? (
                <div className="h-screen w-full flex mt-24 justify-center">
                    <CgSpinner className="animate-spin text-blue-100 text-4xl" />
                </div>
            ) : (
            
                <Layout pageTitle="User Management">
                    <AddUserDrawer
                        openAddUserDrawer={openDrawer}
                        setOpenAddUserDrawer={setOpenDrawer}
                    />

                    <div>
                        <div
                            className="flex justify-end items-center cursor-pointer"
                            onClick={() => setOpenDrawer(true)}
                        >
                            <BsPlusCircleFill color="#40D57B" size="22px" />
                            <h4 className="text-[#3E3E3E] ml-2">Add User</h4>
                        </div>
                        <div className="bg-white-100 p-4 px-2 rounded-[10px] mt-2">
                            <UserManagementTable data={data?.data.items||[]} />
                            <Pagination
                                page={page}
                                total={data?.data.total_pages || 0}
                                onChange={(pageNumber) => setPage(pageNumber)}
                                recordPerpage={25}
                                boundaries={1}
                                totalRecords={data?.data.total_items || 0}
                                
                            />
                        </div>
                    </div>
                </Layout>
            )}
        </>
    )
}
export default UserManagement
