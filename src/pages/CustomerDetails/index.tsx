import { useNavigate } from "react-router-dom"
import { Button, Input, InvoiceModal } from "@components/index"
import OrderHistoryTable from "./orderHistoryTable"
import { AiFillCaretDown } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import Arrow from "@assets/icons/arrow.png"
import ProfilePicture from "@assets/images/profilePicture.png"
import MessageIcon from "@assets/icons/messageIcon.svg"
import CallIcon from "@assets/icons/callIcon.svg"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useSingleUser, useUserOrders } from "@hooks/useUsers"
import dayjs from "dayjs"
import { CgSpinner } from "react-icons/cg"
import { deactivateUser, activateUser } from "@services/users"
import { showNotification } from "@mantine/notifications"
import { type Error } from "../../types/api"
import {  useMutation, useQueryClient } from "@tanstack/react-query"

const CustomerDetails = () => {
    const navigate = useNavigate()
    const [opened, setOpened] = useState(false)
    const { id } = useParams<string>()
    const [orderId, setOrderId] = useState("")
    const { isLoading, data } = useSingleUser({ detailed: true, id: id || "" })

    const { isLoading: isLoadingOrders, data:orders } = useUserOrders({ detailed: true, id: id || "" })

    const queryClient = useQueryClient()
    const { isPending, mutate } = useMutation({
        mutationFn: data?.data.is_active ? deactivateUser : activateUser,
        onSuccess: (data) => {
            queryClient
                .invalidateQueries({
                    queryKey: ["users"],
                })
                .finally(() => false)
            queryClient
                .invalidateQueries({
                    queryKey: ["singleUser"],
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
            {isLoading||isLoadingOrders ? (
                <div className="h-screen w-full flex mt-24 justify-center">
                    <CgSpinner className="animate-spin text-blue-100 text-4xl" />
                </div>
            ) : (
                <div className="p-10 bg-[#FCF9F9] h-[100%]">
                    {opened && (
                        <InvoiceModal
                            opened={opened}
                            setOpened={setOpened}
                            id={orderId}
                        />
                    )}
                    <div className="bg-white-100 rounded-[30px] py-4 pb-20">
                        <div className="flex justify-between mb-6 px-8 pt-4">
                            <div className="flex divide-x-2 gap-2">
                                <div>
                                    <h4 className="text-[#36474B] font-medium">
                                        Customer - {data?.data.serial_number}
                                    </h4>
                                </div>
                            </div>

                            {data?.data.is_active ? (
                                <Button
                                    variant="red"
                                    onClick={() => mutate(id || "")}
                                >
                                    {isPending
                                        ? "Deactivating..."
                                        : "Deactivate"}
                                </Button>
                            ) : (
                                <Button
                                    variant="green"
                                    onClick={() => mutate(id || "")}
                                >
                                    {isPending ? "Activating..." : "Activate"}
                                </Button>
                            )}

                            <img
                                src={Arrow}
                                alt=""
                                className="cursor-pointer "
                                onClick={() => navigate(-1)}
                            />
                        </div>
                        <div className="flex  border-t-2 border-[#1F6FE3] pt-6 px-8">
                            <div>
                                <div className="bg-[#F3F3F330] border border-[#70707045] m-auto text-center w-[200px] h-[230px] pt-6 rounded-[8px]">
                                    <img
                                        src={ProfilePicture}
                                        alt=""
                                        className="w-16 h-16 mx-auto rounded-full"
                                    />
                                    <h4 className="text-blue-100 font-medium text-md  mt-4">
                                        {data?.data.firstname +
                                            " " +
                                            data?.data.lastname}
                                    </h4>
                                    <div className="flex border border-[#E5E0E0] bg-[#F3F3F3] px-3 mt-2 rounded-[30px] w-fit py-1 mx-auto">
                                        <img src={CallIcon} alt="" />
                                        <img
                                            src={MessageIcon}
                                            alt=""
                                            className="ml-8"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-x-20 ml-10 gap-y-2">
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        SURNAME
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.lastname}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        GENDER{" "}
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        Male
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        PHONE NUMBER
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.phone}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        ADDRESS
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.address}
                                    </h4>
                                </div>

                                <div className="mb-8">
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        FIRST NAME
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.firstname}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        DATE OF BIRTH
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        2nd January, 1980{" "}
                                        {dayjs(data?.data.dob).format(
                                            "Do MMMM, YYYY"
                                        )}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        COUNTRY
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.country}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        Date registered
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        9/01/2024{" "}
                                        {dayjs(data?.data.created_at).format(
                                            "d/MM/YYYY"
                                        )}
                                    </h4>
                                </div>

                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        OTHER NAME
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.othername || "-"}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        EMAIL
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.email}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        STATE
                                    </h4>
                                    <h4 className="text-[#444444] text-md ">
                                        {data?.data.state}
                                    </h4>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-100 text-lg">
                                        Cylinder Serial Number
                                    </h4>
                                    <h4 className="text-[#444444] flex text-md ">
                                        N/A
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#1F6FE340] mt-6">
                            <p className="text-blue-100 px-8 py-2">
                                Order History
                            </p>
                        </div>
                        <div className="mt-8 px-8 mb-6">
                            <div className="flex justify-between">
                                <Input
                                    placeholder="Search"
                                    className="rounded-[30px] w-[30%] px-4 h-14 "
                                    prefixIcon={
                                        <BiSearch
                                            color="#1F6FE3"
                                            size="22px"
                                            className="mr-4"
                                        />
                                    }
                                />
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
                        <div className="px-8">
                            <OrderHistoryTable
                                setOpenModal={setOpened}
                                setId={setOrderId}
                                data={orders?.data.data.items||[]}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CustomerDetails
