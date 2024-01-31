import { Table } from "@mantine/core"
import { usersData, userStatus } from "../utils/userMangent.utils"
import { Checkbox } from "@components/index"
import { useNavigate } from "react-router-dom"
//import { Items } from "../../../types/api"

// interface UserManagementTableInterface {
//     data:Items[]
// }
const UserManagementTable = () => {
    const navigate = useNavigate()
    const rows = usersData.map((element, index) => (
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
            <Table.Td>{element.customerId}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.department||"Nil"}</Table.Td>
            <Table.Td>{element.role}</Table.Td>
            <Table.Td>{element.email}</Table.Td>
            <Table.Td>{userStatus(element.status)}</Table.Td>
            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() => navigate(`/user/${element.customerId}`)}
            >
                View
            </Table.Td>
        </Table.Tr>
    ))
    const tableHead = [
        "",
        "STAFF ID",
        "NAME",
        "DEPARTMENT",
        "ROLE",
        "EMAIL",

        "STATUS",
        "",
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
export default UserManagementTable
