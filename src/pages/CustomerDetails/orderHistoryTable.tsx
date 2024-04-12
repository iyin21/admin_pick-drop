import { Table } from "@mantine/core"
import { Checkbox } from "@components/index"
import { Items } from "../../types/api/order.types"
import dayjs from "dayjs"

interface OrderHistoryTableInterface {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    data: Items[]
    setId: React.Dispatch<React.SetStateAction<string>>
}
const OrderHistoryTable = ({
    setOpenModal,
    data,
    setId,
}: OrderHistoryTableInterface) => {
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
            <Table.Td>{item.total_weight}</Table.Td>
            <Table.Td>{dayjs(item.created_at).format("DD/MM/YYYY")}</Table.Td>
            <Table.Td>₦{item.amount}</Table.Td>
            <Table.Td>{item.method}</Table.Td>
            <Table.Td className="text-[#44934D]">{item.status}</Table.Td>
            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() => {
                    setId(item.id);
                    setOpenModal(true)
                }}
            >
                View
            </Table.Td>
        </Table.Tr>
    ))
    const tableHead = [
        "",
        "ORDER ID",
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

export default OrderHistoryTable
