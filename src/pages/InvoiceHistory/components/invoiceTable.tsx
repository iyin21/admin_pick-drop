import { Table } from "@mantine/core"
import { Checkbox } from "@components/index"
import { invoiceData } from "../utils/invoice.utils"

interface InvoiceTableInterface {
   setOpenModal:React.Dispatch<React.SetStateAction<boolean>>
   //data:Items[]
   setId: React.Dispatch<React.SetStateAction<string>>
}
const InvoiceTable = ({
    setOpenModal,
     //data,
      setId
}: InvoiceTableInterface) => {
    const rows = invoiceData.map((item, index) => (
        <Table.Tr
            key={index}
            className="text-[#1C1C1C]  group "
            style={{
                fontSize: "18px",
            }}
        >
            <Table.Td><Checkbox/></Table.Td>
            <Table.Td>{item.invoiceId}</Table.Td>
            <Table.Td>{item.volume}</Table.Td>
            <Table.Td>{item.orderDate}</Table.Td>
            <Table.Td>{(item.payment).toLocaleString()}</Table.Td>
            <Table.Td>{item.paymentMethod}</Table.Td>
            <Table.Td className="text-[#44934D]">{item.status}</Table.Td>

            
            <Table.Td className="cursor-pointer underline text-[#3A7EC1]" onClick={()=>{setId(item.invoiceId); setOpenModal(true)}}>
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
        ""
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
export default InvoiceTable
