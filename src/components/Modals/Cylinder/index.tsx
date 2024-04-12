import { Modal } from "@mantine/core"
import Close from "@assets/icons/close.png"
import GasLogo from "@assets/images/gasLogo.png"
import { GoDotFill } from "react-icons/go"
import Avatar from "@assets/images/avatar.png"
import { FaStar } from "react-icons/fa"
import QRCode from "qrcode.react"
import { Items } from "../../../types/api/cylinder.types"

export interface CynlinderModalProps {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
    item?: Items
}

const CynlinderModal = ({ opened, setOpened, item }: CynlinderModalProps) => {
    // const { data, isLoading } = useQuery({
    //     queryKey: ["singleOrder"],
    //     queryFn: () => fetchSingleOrder({ detailed: true, id: id }),

    // })
    
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
            <div className="rounded-lg bg-white p-2">
                <div className="flex justify-between items-center border-b py-2">
                    <p className=" font-medium text-[24px]">Cylinder</p>
                    <img
                        src={Close}
                        alt=""
                        onClick={() => setOpened(false)}
                        className="w-10 cursor-pointer "
                    />
                </div>
            </div>
            <div className="mt-6 flex gap-6">
                <div>
                    <p className="text-blue-70 text-[19px] font-medium">
                        Serial Number
                    </p>
                    <p className="text-[24px] font-medium ">
                        {item?.serial_number}
                    </p>
                </div>
                <div>
                    <p className="text-blue-70 text-[19px] font-medium">
                        Owner
                    </p>
                    <p className="text-[24px] font-medium ">
                        {item?.owner_name}
                    </p>
                </div>
                <div>
                    <p className="text-blue-70 text-[19px] font-medium">
                        Status
                    </p>
                    <p className="text-[24px] font-medium text-[#FF9D0090]">
                        {item?.status}
                    </p>
                </div>
            </div>
            <div className="mt-6 mb-2 border-t pt-4">
                <p className="text-blue-70 text-[19px] font-medium">
                    Current Location
                </p>
                <p className="text-[24px] font-medium ">{item?.location}</p>
                <p className="text-black-50 flex items-center">
                    {item?.tracking?.service_person_name}
                    <GoDotFill color="#FF9D0090" /> 07000000000
                </p>
            </div>

            <div className="flex  gap-16 items-center mt-6 mb-2 border-t pt-4">
                <div>
                    <p className="text-blue-70 text-[19px] font-medium">
                        Rider
                    </p>
                    <div className="flex items-center">
                        <img src={Avatar} className="w-10 h-10" alt="" />
                        <div className="pl-2">
                            <p className="text-black-50 font-medium text-[24px]">
                                Chike Brown
                            </p>
                            <div className="flex justify-between items-center">
                                <p className="text-[18px] text-gray-80">
                                    ABC1234
                                </p>
                                <div className="flex items-center">
                                    <p className="text-[19px] font-medium">
                                        4.80
                                    </p>
                                    <FaStar color="#FDB022" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <QRCode value="Rokwood gas" className="w-48 h-48" />
            </div>
            <div className="mt-8 mb-10 flex justify-center">
                <img src={GasLogo} alt="" width={50} />
            </div>
        </Modal>
    )
}
export default CynlinderModal
