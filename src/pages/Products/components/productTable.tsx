import { Table } from "@mantine/core"
import { Checkbox } from "@components/index"
import { useNavigate } from "react-router-dom"
import { Items } from "../../../types/api/products.types"

interface ProductTableInterface {
    data:Items[]
    
}
const ProductTable = ({data}: ProductTableInterface ) => {
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
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>₦{(element.price).toLocaleString()}</Table.Td>
            <Table.Td>{element.description}</Table.Td>
            <Table.Td>12/03/2024</Table.Td>
            <Table.Td className="text-[#6EBC77]">In Stock</Table.Td>

            <Table.Td
                className="cursor-pointer underline text-[#3A7EC1]"
                onClick={() => navigate(`/product/${element.id}`)}
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
