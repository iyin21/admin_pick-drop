import { Table } from "@mantine/core"
//import { usersData, userStatus } from "../utils/userMangent.utils"
import { Checkbox } from "@components/index"
import { useNavigate } from "react-router-dom"
import { Items } from "../../../types/api/rider.types"

interface RiderTableInterface {
    data:Items[]
}
const RiderTable = ({data}:RiderTableInterface) => {
    const navigate = useNavigate()
    const rows = data.map((element, index) => (
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
            <Table.Td>{element.serial_number}</Table.Td>
            <Table.Td>{element.firstname+" "+element.lastname}</Table.Td>
            <Table.Td>{element?.vehicle_id||"-"} </Table.Td>
            <Table.Td>{element.total_completed_trips}</Table.Td>
            <Table.Td>{element.email}</Table.Td>
            <Table.Td className="text-[#6EBC77]">{element.status}</Table.Td>
            
            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() =>
                    navigate(`/rider/${element.id}`)
                 }
            >
                View
            </Table.Td>
        </Table.Tr>
    ))
    const tableHead = [
        "",
        "RIDER ID",
        "NAME",
        "VEHICLE",
        "TRIPS",
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
export default RiderTable
