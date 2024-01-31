import MessageIcon from "@assets/icons/greenMessageIcon.svg"
import CallIcon from "@assets/icons/greenCallIcon.svg"
import ProfilePicture from "@assets/images/profilePicture.png"
import { FaStar } from "react-icons/fa"

const OrderDetails = () => {
    return (
        <div>
            <p className="bg-blue-50 p-4 text-white-100">Order ID 1234567</p>
            <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                    <p className="text-[11px] text-gray-70 mb-2">CUSTOMER</p>
                    <div className="flex items-center">
                        <img
                            src={ProfilePicture}
                            className="w-10 h-10"
                            alt=""
                        />
                        <div className="ml-2 basis-1/2">
                            <p className="text-2md text-black-40">Kate Henry</p>
                            <div className="flex items-center gap-1">
                                <FaStar color="#398457" />
                                <p>4.5</p>
                            </div>
                        </div>
                        <div className="flex place-self-start flex-auto gap-4">
                            <img src={CallIcon} className="w-5" alt="" />
                            <img src={MessageIcon} className="w-5" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[11px] text-gray-70 mb-2">RIDER</p>
                    <div className="flex items-center">
                        <img
                            src={ProfilePicture}
                            alt=""
                            className="w-10 h-10"
                        />
                        <div className="ml-2 basis-1/2">
                            <p className="text-2md text-black-40">
                                Chike Brown
                            </p>
                            <div className="flex items-center  gap-1">
                                <FaStar color="#398457" />
                                <p>4.5</p>
                            </div>
                        </div>
                        <div className="flex place-self-start flex-auto gap-4">
                            <img src={CallIcon} className="w-5" alt="" />
                            <img src={MessageIcon} className="w-5" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-blue-100 text-[10px]">REQUEST DATE</p>
                    <p className="text-black-30 text-[15px]">10th Nov. 2022</p>
                </div>
                <div>
                    <p className="text-blue-100 text-[10px]">PICK-UP DATE</p>
                    <p className="text-black-30 text-[15px]">12th Nov. 2022</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p className="text-blue-100 text-[10px]">
                            DROP-OFF LOCATION
                        </p>
                    </div>

                    <p className="text-black-30 text-[15px]">
                        30 Ring road, Ikeja, Lagos State, Nigeria
                    </p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p className="text-blue-100 text-[10px]">
                            PICK-UP LOCATION
                        </p>
                    </div>
                    <p className="text-black-30 text-[15px]">
                        23 Ring road, Ikeja, Lagos State Nigeria
                    </p>
                </div>
                <div>
                    <p className="text-blue-100 text-[10px]">PICK-UP TIME</p>
                    <p className="text-black-30 text-[15px]">10:35 AM</p>
                </div>
                <div>
                    <p className="text-blue-100 text-[10px]">DROP-OFF TIME</p>
                    <p className="text-black-30 text-[15px]">4:22 PM</p>
                </div>
                <div>
                    <p className="text-blue-100 text-[10px]">TRIP TIME</p>
                    <p className="text-black-30 text-[15px]">5hr 57min</p>
                </div>
                <div>
                    <p className="text-blue-100 text-[10px]">ITEM</p>
                    <p className="text-black-30 text-[15px]">3KG Cooking Gas</p>
                    <p>Quantity: 1</p>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails
