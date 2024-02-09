import { Layout } from "@components/index"
import ProductTable from "./components/productTable";
import { useState } from "react"
import { BsPlusCircleFill } from "react-icons/bs"
import AddProductDrawer from "./components/addProduct";
const Products =()=>{
    const [openDrawer, setOpenDrawer] = useState(false)
    return(
        <Layout pageTitle="Products">
                    <AddProductDrawer
                        openAddProductDrawer={openDrawer}
                        setOpenAddProductDrawer={setOpenDrawer}
                    />
                    <div
                            className="flex justify-end items-center cursor-pointer"
                            onClick={() => setOpenDrawer(true)}
                        >
                            <BsPlusCircleFill color="#40D57B" size="22px" />
                            <h4 className="text-[#3E3E3E] ml-2">Add Product</h4>
                        </div>
                        <div className="bg-white-100 p-4 px-2 rounded-[10px] mt-2">
                            <ProductTable />
                            {/* <Pagination
                                page={page}
                                total={data?.data.data.total_pages || 0}
                                onChange={(pageNumber) => setPage(pageNumber)}
                                recordPerpage={25}
                                boundaries={1}
                                totalRecords={data?.data.data.total_items || 0}
                                // count={paginatedData?.length || 0}
                            /> */}
                        </div>
        </Layout>

    )
}

export default Products;