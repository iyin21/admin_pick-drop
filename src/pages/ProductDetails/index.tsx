import { useNavigate } from "react-router-dom"
import { Button } from "@components/index"
import { RxDotFilled } from "react-icons/rx"

import Arrow from "@assets/icons/arrow.png"
import ProfilePicture from "@assets/images/profilePicture.png"
import MessageIcon from "@assets/icons/messageIcon.svg"
import CallIcon from "@assets/icons/callIcon.svg"

//import { useState } from "react"

const ProductDetails = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="p-10 px-40 bg-[#FCF9F9] h-[100%]">
                <div className="bg-white-100 rounded-[30px] py-4 pb-20 px-40">
                    <div className="flex justify-between mb-6 px-8 pt-4">
                        <div className="flex divide-x-2 gap-2">
                            <div>
                                <h4 className="text-[#36474B] font-medium">
                                    3KG Gas
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
                                    src={ProfilePicture}
                                    alt=""
                                    className="w-16 h-16 mx-auto rounded-full"
                                />
                                <h4 className="text-blue-100 font-medium text-md  mt-4">
                                    John Doe
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
                        <div className="grid grid-cols-2 gap-x-20 ml-10 gap-y-2">
                            <div>
                                <h4 className="font-medium text-blue-100 text-lg">
                                    PRODUCT
                                </h4>
                                <h4 className="text-[#444444] text-md ">3KG</h4>
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
                                    N2,700
                                </h4>
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-100 text-lg">
                                    STATUS
                                </h4>
                                <h4 className="text-[#444444] flex text-md">
                                    <RxDotFilled color="#40D57B" size="24px" />
                                    in stock
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="px-34 mt-8 flex justify-between">
                        <Button className="ml-4 rounded-[10px] p-4 bg-[#FF5C5C22] border border-[#FF5C5C] text-[#707070]">
                            Out of stock
                        </Button>
                        <Button className="rounded-[10px] p-4 px-8 bg-[#A5A5A5]  text-[#2B2D42]">
                            Edit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
