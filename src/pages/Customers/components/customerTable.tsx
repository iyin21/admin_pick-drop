import { Table } from "@mantine/core"
import { customerStatus } from "../utils/customers.utils"
import { Checkbox } from "@components/index"
import { useNavigate } from "react-router-dom"
//import { Items } from "../../../types/api/"
import { customersData } from "../utils/customers.utils"

// interface CustomerTableInterface {
//     data: Items[]
// }
const CustomerTable = () => {
    const navigate = useNavigate()

    const rows = customersData.map((item, index) => (
        <Table.Tr
            key={index}
            className="text-[#1C1C1C]  group "
            style={{
                fontSize: "14px",
            }}
        >
            <Table.Td>
                <Checkbox />
            </Table.Td>
            <Table.Td>{item.customerId}</Table.Td>
            <Table.Td>{item.firstName}</Table.Td>
            <Table.Td>{item.otherName}</Table.Td>
            <Table.Td>{item.email}</Table.Td>
            <Table.Td>{item.phoneNumber}</Table.Td>
            <Table.Td>{item.dateRegistered}</Table.Td>

            <Table.Td>{customerStatus(item.status)}</Table.Td>
            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() =>
                   navigate("/Customer/id")
                }
            >
                View
            </Table.Td>
        </Table.Tr>
    ))
    const tableHead = [
        "",
        "CUSTOMER ID",
        "FIRST NAME",
        "OTHER NAME",
        "PHONE NUMBER",
        "LOCATION",
        "DATE REGISTERED",
        "STATUS",
    ]
    return (
        <Table
            style={{
                fontFamily: "Roboto",
                fontSize: "16px",
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
                                fontSize: "12px",
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
export default CustomerTable
