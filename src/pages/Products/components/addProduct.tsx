import { Drawer } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import Close from "@assets/icons/close.png"
import { Formik, Form } from "formik"
import { Button, FormControls } from "@components/index"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type Error } from "../../../types/api"
import { showNotification } from "@mantine/notifications"
import { productValidationSchema } from "@utils/validationSchema"
import { createProduct } from "@services/products"
import { Items } from "../../../types/api/products.types"

interface AddProductProps {
    setOpenAddProductDrawer: Dispatch<SetStateAction<boolean>>
    openAddProductDrawer: boolean
    data?:Items
}
const AddProductDrawer = ({
    setOpenAddProductDrawer,
    openAddProductDrawer,
    data
}: AddProductProps) => {
    const queryClient = useQueryClient()

    const { isPending, mutate } = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            showNotification({
                title: "Success",
                message: "Product created successfully",
                color: "green",
            })
            queryClient
                .invalidateQueries({ queryKey: ["products"] })
                .finally(() => false)
            setOpenAddProductDrawer(false)
        },
        onError: (err: Error) => {
            showNotification({
                title: "Error",
                message:
                    err.response?.data?.message ||
                    err.message ||
                    "Something went wrong, please try again later",
                color: "red",
            })
        },
    })
    const base64_arraybuffer = async (data: File | string) => {
        // Use a FileReader to generate a base64 data URI
        const base64url = await new Promise((r) => {
            const reader = new FileReader()
            reader.onload = () => r(reader.result)
            reader.readAsDataURL(new Blob([data]))
        })

        /*
        The result looks like
        "data:application/octet-stream;base64,<your base64 data>",
        so we split off the beginning:
        */
        // @ts-expect-error
        return `data:${data.type};base64,${base64url.split(",", 2)[1]}`
    }
    return (
        <Drawer
            opened={openAddProductDrawer}
            onClose={() => setOpenAddProductDrawer(false)}
            size="40%"
            withCloseButton={false}
            position="right"
            padding="xl"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-[#36474B]">Add User</h3>
                </div>
                <div className="flex-end">
                    <img
                        src={Close}
                        alt=""
                        className="cursor-pointer"
                        onClick={() => setOpenAddProductDrawer(false)}
                    />
                </div>
            </div>
            <Formik
                initialValues={{
                    productName: data?.name||"",
                    price: data?.price||"",
                    productImage: "",
                    description: data?.description||"",
                }}
                validationSchema={productValidationSchema}
                onSubmit={async (values) =>
                    mutate({
                        name: values.productName,
                        image: `${await base64_arraybuffer(values.productImage)}`,
                        price: Number(values.price),
                        description: values.description,
                    })
                }
            >
                {() => (
                    <Form className="py-4 mt-10 border-t">
                        <div className="mt-6">
                            <FormControls
                                label="Product Name"
                                control="input"
                                name="productName"
                                placeholder="Product name"
                                classNames={{
                                    mainRoot:
                                        " border-2  border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                        </div>
                        <div className="mt-6">
                            <FormControls
                                label="Price"
                                control="input"
                                name="price"
                                type="number"
                                placeholder="Price"
                                classNames={{
                                    mainRoot:
                                        " border-2  border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                        </div>

                        <div className="mt-6">
                            <FormControls
                                label="Upload Product Image"
                                control="file"
                                name="productImage"
                                placeholder="Upload Document"
                                classNames={{
                                    mainRoot:
                                        " border-2 border-dashed  border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                        </div>
                        <div className="mt-6">
                            <FormControls
                                label="Description"
                                control="input"
                                name="description"
                                placeholder="Price"
                                classNames={{
                                    mainRoot:
                                        " border-2  border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                        </div>
                        <div className="flex justify-between mt-14">
                            <Button
                                variant="light-blue"
                                onClick={() => setOpenAddProductDrawer(false)}
                                type="button"
                            >
                                Back
                            </Button>

                            <Button
                                variant="blue"
                                className="shadow-[0_15px_40px_#1F6FE342]"
                                type="submit"
                                disabled={isPending}
                            >
                                {isPending ? "Creating..." : "Create"}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Drawer>
    )
}

export default AddProductDrawer
