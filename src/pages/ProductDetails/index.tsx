import { useNavigate } from "react-router-dom"
import { Button } from "@components/index"
import { RxDotFilled } from "react-icons/rx"
import { useParams } from "react-router-dom"
import Arrow from "@assets/icons/arrow.png"
import { useSingleProduct } from "@hooks/useProducts"
import { CgSpinner } from "react-icons/cg"
import AddProductDrawer from "../Products/components/addProduct"
import { useState } from "react"
import { showNotification } from "@mantine/notifications"
import { type Error } from "../../types/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { publishProduct, unpublishProduct } from "@services/products"

const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams<string>()
    const { isLoading, data } = useSingleProduct({
        id: id || "",
        detailed: true,
    })
    const [openDrawer, setOpenDrawer] = useState(false)

    const queryClient = useQueryClient()
    const { isPending, mutate } = useMutation({
        mutationFn: data?.data.product.is_published
            ? unpublishProduct
            : publishProduct,
        onSuccess: (data) => {
            queryClient
                .invalidateQueries({
                    queryKey: ["products"],
                })
                .finally(() => false)
            queryClient
                .invalidateQueries({
                    queryKey: ["singleProduct"],
                })
                .finally(() => false)
            showNotification({
                title: "Success",
                message: data.data.message,
                color: "green",
            })
        },
        onError: (err: Error) => {
            showNotification({
                title: "Error",
                message:
                    err.response?.data?.message ||
                    err.message ||
                    "Something went wrong, please try again later",
                color: "red",
            })
        },
    })
    return (
        <>
            {isLoading ? (
                <div className="h-screen w-full flex mt-24 justify-center">
                    <CgSpinner className="animate-spin text-blue-100 text-4xl" />
                </div>
            ) : (
                <div className="p-10 px-40 bg-[#FCF9F9] h-[100%]">
                    <AddProductDrawer
                        openAddProductDrawer={openDrawer}
                        setOpenAddProductDrawer={setOpenDrawer}
                        data={data?.data.product}
                    />
                    <div className="bg-white-100 rounded-[30px] py-4 pb-20 px-40">
                        <div className="flex justify-between mb-6 px-8 pt-4">
                            <div className="flex divide-x-2 gap-2">
                                <div>
                                    <h4 className="text-[#36474B] font-medium">
                                        {data?.data.product.name}
                                    </h4>
                                </div>
                            </div>

                            <img
                                src={Arrow}
                                alt=""
                                className="cursor-pointer "
                                onClick={() => navigate(-1)}
                            />
                        </div>
                        <div className="flex  border-t-2 border-[#1F6FE3] pt-6 ">
                            <div className="px-4">
                                <div className="bg-[#F3F3F330] border border-[#70707045] m-auto text-center w-[200px] h-[230px] pt-6 rounded-[8px]">
                                    <img
                                        src={data?.data.product.image}
                                        alt=""
                                        className="w-16 h-16 mx-auto rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-20 ml-10 gap-y-2">
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        PRODUCT
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.product.name}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        DATE ADDED
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        1st January, 2023
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        PRICE
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.product.price?.toLocaleString()}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        STATUS
                                    </h4>
                                    <h4 className="text-[#444444] flex text-md">
                                        <RxDotFilled
                                            color="#40D57B"
                                            size="24px"
                                        />
                                        {data?.data.product.is_published
                                            ? "in stock"
                                            : "out of stock"}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="px-34 mt-8 flex justify-between">
                            {data?.data.product.is_published ? (
                                <Button
                                    className="ml-4 rounded-[10px] p-4 bg-[#FF5C5C22] border border-[#FF5C5C] text-[#707070]"
                                    onClick={() => mutate(id || "")}
                                >
                                    {isPending
                                        ? "Unpublishing..."
                                        : "Out of stock"}
                                </Button>
                            ) : (
                                <Button
                                    className="ml-4 rounded-[10px]"
                                    variant="green"
                                    onClick={() => mutate(id || "")}
                                >
                                    {isPending ? "Publishing..." : "In stock"}
                                </Button>
                            )}

                            <Button
                                className="rounded-[10px] p-4 px-8 bg-[#A5A5A5]  text-[#2B2D42]"
                                onClick={() => setOpenDrawer(true)}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetails
