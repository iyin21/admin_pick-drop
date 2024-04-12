import { Items } from "../../../types/api/order.types"
import dayjs from "dayjs"

const OrderCard = ({
    color,
    handleClick,
    data,
}: {
    color: string
    handleClick: () => void
    data: Items
}) => {
    return (
        <div
            className={`${color} flex  mb-4 justify-between cursor-pointer p-4`}
            onClick={handleClick}
        >
            <div>
                <p className="text-[10px] text-[#7B7D8B]">SENDER</p>
                <p className="text-md text-[#1D1D1D]">{data.sender?.name}</p>
            </div>
            <div>
                <p className="text-[10px] text-[#7B7D8B]">RECIPIENT</p>
                <p className="text-md text-[#1D1D1D]">{data?.recipient?.name}</p>
            </div>
            <div>
                <p className="text-[10px] text-[#7B7D8B]">REQUEST DATE</p>
                <p className="text-md text-[#1D1D1D]">
                    {dayjs(data.created_at).format("Do MMM., YYYY")}
                </p>
            </div>
            <div>
                <p className="text-[10px] text-[#7B7D8B]">STATUS</p>
                <p className="text-md text-[#FFA280]">{data.status}</p>
            </div>
        </div>
    )
}

export default OrderCard
