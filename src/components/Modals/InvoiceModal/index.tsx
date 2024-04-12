import { Modal } from "@mantine/core"
import Close from "@assets/icons/close.png"
import GasLogo from "@assets/images/gasLogo.png"
import { GoDotFill } from "react-icons/go"
import Check from "@assets/images/check.png"
import Payment from "@assets/images/payment.png"
import Avatar from "@assets/images/avatar.png"
import { FaStar } from "react-icons/fa"
//import { useSingleTransaction } from "@hooks/useTransactions"
//import { CgSpinner } from "react-icons/cg"

export interface InvoiceModalProps {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
    id: string
}

const InvoiceModal = ({ opened, setOpened, id }: InvoiceModalProps) => {
    //const { data, isLoading } = useSingleTransaction({id:id})
    
    console.log(id)
    return (
        <Modal
            opened={opened}
            withCloseButton={false}
            onClose={() => setOpened(false)}
            size="500px"
            centered
            radius={22}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
        >
             {/* {isLoading ? (
                <div className="h-screen w-full flex mt-24 justify-center">
                    <CgSpinner className="animate-spin text-blue-100 text-4xl" />
                </div>
            ) : (
                <> */}
            <div className="rounded-lg bg-white p-2">
                <div className="cursor-pointer  flex justify-end">
                    <img
                        src={Close}
                        alt=""
                        onClick={() => setOpened(false)}
                        className="w-10"
                    />
                </div>

                <div className="flex justify-between  my-2 ">
                    <p className="text-md font-bold text-[17px]">INVOICE</p>
                    <div>
                        <img src={GasLogo} alt="" width={50} />
                    </div>
                </div>
            </div>
            <div className="-mt-8">
                <p className="text-blue-70 text-[19px] font-medium">Sender</p>
                <p className="text-[24px] font-medium ">
                    23 Ring road, Ikeja, Lagos State
                </p>
                <p className="text-black-50 flex items-center">
                    Rokswood Gas
                    <GoDotFill color="#FF9D0090" /> 07000000000
                </p>
            </div>
            <div className="mt-8 mb-2">
                <p className="text-blue-70 text-[19px]">Recipent</p>
                <p className="text-[24px] font-medium ">
                    30 Ring road, Ikeja, Lagos State
                </p>
                <p className="text-black-50 flex items-center">
                    John Doe
                    <GoDotFill color="#FF9D0090" /> 07000000000
                </p>
            </div>
            <div className="mt-8 mb-2">
                <p className="text-blue-70 text-[19px] font-medium">Item</p>
                <p className="text-[24px] font-medium ">3KG Cooking Gas</p>
                <p className="text-black-50">Quantity: 1</p>
            </div>
            <div className="flex bg-blue-60 rounded-[10px] p-4 gap-4">
                <div className="border-r pr-4">
                    <p className="font-medium text-white-90">Product</p>
                    <p className="text-[34px] text-white-80 font-bold">
                        ₦2,700
                    </p>
                </div>
                <div className="border-r pr-4">
                    <p className="text-white-90 font-medium">Delivery</p>
                    <p className="text-[34px] text-white-80 font-bold">₦700</p>
                </div>
                <div>
                    <p className="font-medium text-white-90">Total</p>
                    <p className="text-[34px] text-white-80 font-bold">
                        ₦3,400
                    </p>
                </div>
            </div>
            <div className="flex mt-10 gap-8 flex-wrap items-center">
                <div className="flex">
                    <img src={Check} className="w-14 h-14" alt="checked" />
                    <div className="pl-2">
                        <p className="text-green-90 font-bold text-[18px]">Delivered</p>
                        <p className="text-[18px] text-gray-80">
                            12/01/24 | 3:14pm
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={Avatar} className="w-10 h-10" alt="" />
                    <div className="pl-2">
                        <p className="text-black-50 font-medium text-[24px]">
                            Chike Brown
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-[18px] text-gray-80">ABC1234</p>
                            <div className="flex items-center">
                                <p className="text-[19px] font-medium">4.80</p>
                                <FaStar color="#FDB022" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mb-10">
                    <img src={Payment} alt="" />
                    <div className="pl-2">
                        <p className="text-green-90 font-bold text-[18px]">
                            Payment Received
                        </p>
                        <p className="text-[18px] text-gray-80 font-medium">
                            Card - Paystack
                        </p>
                    </div>
                </div>
            </div>
            {/* </>
            )} */}
        </Modal>
    )
}
export default InvoiceModal
