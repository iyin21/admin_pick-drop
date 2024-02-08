
const OrderCard = ({
    color,
    handleClick,
}: {
    color: string
    handleClick: () => void
}) => {

    

    return (
        <div
            className={`${color} flex  mb-4 justify-between cursor-pointer p-4`}
            onClick={handleClick}
        >
            {/* <div>
                <p className="text-[10px] text-[#7B7D8B]">SENDER</p>
                <p className="text-2md text-[#1D1D1D]">Rokswood Gas</p>
            </div> */}
            <div>
                <p className="text-[10px] text-[#7B7D8B]">RECIPIENT</p>
                <p className="text-2md text-[#1D1D1D]">John Doe</p>
            </div>
            <div>
                <p className="text-[10px] text-[#7B7D8B]">REQUEST DATE</p>
                <p className="text-2md text-[#1D1D1D]">10th Nov. 2022</p>
            </div>
            <div>
                <p className="text-[10px] text-[#7B7D8B]">STATUS</p>
                <p className="text-2md text-[#FFA280]">Dispatch</p>
            </div>
        </div>
    )
}

export default OrderCard
