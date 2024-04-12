import { Table } from "@mantine/core"
import { Checkbox } from "@components/index"
import {
    cylinderStatus,
} from "../utils/cylinderTracking.utils"
import { Items } from "../../../types/api/cylinder.types"

interface CylinderTrackingTableInterface {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    data:Items[]
    setItem: React.Dispatch<React.SetStateAction<Items|undefined>>
}
const CylinderTrackingTable = ({
    setOpenModal,
    data,
    setItem,
}: CylinderTrackingTableInterface) => {
    const rows = data.map((item, index) => (
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
            <Table.Td>{item.serial_number}</Table.Td>
            <Table.Td>{item.weight}</Table.Td>
            <Table.Td>{item.owner_name}</Table.Td>
            <Table.Td>{item.location}</Table.Td>
            <Table.Td>-</Table.Td>
            <Table.Td className="text-[#44934D]">
                {cylinderStatus(item.status)}
            </Table.Td>

            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() => {
                    setItem(item)
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
        "Owner",
        "CURRENT LOCATION",
        "RIDER",
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
