import { Table } from "@mantine/core"
//import { usersData, userStatus } from "../utils/userMangent.utils"
import { Checkbox } from "@components/index"
import { useNavigate } from "react-router-dom"
//import { Items } from "../../../types/api"

// interface UserManagementTableInterface {
//     data:Items[]
// }
const ProductTable = () => {
    const navigate = useNavigate()
    const rows = new Array(5).fill(0).map((element, index) => (
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
            <Table.Td>3kg</Table.Td>
            <Table.Td>N2,700</Table.Td>
            <Table.Td>Hassle-free Cooking Gas – the epitome of ….</Table.Td>
            <Table.Td>johndoe@rokswood.com</Table.Td>
            <Table.Td className="text-[#6EBC77]">In Stock</Table.Td>

            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() => navigate("/product-details")}
            >
                View
            </Table.Td>
        </Table.Tr>
    ))
    const tableHead = [
        "",
        "CYLINDER",
        "PRICE",
        "DESCRIPTION",
        "DATE CREATED",
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
export default ProductTable
