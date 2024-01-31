import { Table } from "@mantine/core"
import { Checkbox } from "@components/index"
import {
    CylinderTracking,
    cylinderStatus,
} from "../utils/cylinderTracking.utils"

interface CylinderTrackingTableInterface {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    //data:Items[]
    setId: React.Dispatch<React.SetStateAction<string>>
}
const CylinderTrackingTable = ({
    setOpenModal,
    //data,
    setId,
}: CylinderTrackingTableInterface) => {
    const rows = CylinderTracking.map((item, index) => (
        <Table.Tr
            key={index}
            className="text-[#1C1C1C]  group "
            style={{
                fontSize: "18px",
            }}
        >
            <Table.Td>
                <Checkbox />
            </Table.Td>
            <Table.Td>{item.serialNumber}</Table.Td>
            <Table.Td>{item.volume}</Table.Td>
            <Table.Td>{item.owner}</Table.Td>
            <Table.Td>{item.currentLocation}</Table.Td>
            <Table.Td>{item.rider}</Table.Td>
            <Table.Td className="text-[#44934D]">
                {cylinderStatus(item.status)}
            </Table.Td>

            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() => {
                    setId(item.serialNumber)
                    setOpenModal(true)
                }}
            >
                View
            </Table.Td>
        </Table.Tr>
    ))
    const tableHead = [
        "",
        "INVOICE ID",
        "VOLUME",
        "ORDER DATE",
        "PAYMENT",
        "PAYMENT METHOD",
        "STATUS",
        "",
    ]
    return (
        <Table
            style={{
                fontFamily: "Roboto",
                fontSize: "20px",
            }}
            verticalSpacing="md"
            data-testid="table-data"
            role="grid"
            withRowBorders={true}
        >
            <Table.Thead className=" w-full border-b-[1px] border-[#EEEEEE] ">
                <Table.Tr className="">
                    {tableHead.map((item, index) => (
                        <Table.Th
                            key={index}
                            style={{
                                borderBottom: "1px",
                                color: "#7F9395",
                                fontSize: "14px",
                            }}
                        >
                            {item}
                        </Table.Th>
                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    )
}
export default CylinderTrackingTable
