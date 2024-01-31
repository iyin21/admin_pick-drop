import { Drawer } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import Close from "@assets/icons/close.png"
import { Formik, Form } from "formik"
import { Button, FormControls } from "@components/index"
//import { useMutation, useQueryClient } from "@tanstack/react-query"
//import { type Error } from "../../../types/api"
//import { showNotification } from "@mantine/notifications"
//import { userValidationSchema } from "@utils/validationSchema"
//import dayjs from "dayjs"

interface AddCylinderProps {
    setOpenAddCylinderDrawer: Dispatch<SetStateAction<boolean>>
    openAddCylinderDrawer: boolean
}
const AddCylinderDrawer = ({
    setOpenAddCylinderDrawer,
    openAddCylinderDrawer,
}: AddCylinderProps) => {
    
    // const queryClient = useQueryClient()

    // const { isPending, mutate } = useMutation({
    //     mutationFn: createUser,
    //     onSuccess: () => {
    //         showNotification({
    //             title: "Success",
    //             message: "User created successfully",
    //             color: "red",
    //         })
    //         queryClient
    //             .invalidateQueries({ queryKey: ["users"] })
    //             .finally(() => false)
    //         setOpenAddUserDrawer(false)
    //     },
    //     onError: (err: Error) => {
    //         showNotification({
    //             title: "Error",
    //             message:
    //                 err.response?.data?.message ||
    //                 err.message ||
    //                 "Something went wrong, please try again later",
    //             color: "red",
    //         })
    //     },
    // })

    return (
        <Drawer
            opened={openAddCylinderDrawer}
            onClose={() => setOpenAddCylinderDrawer(false)}
            size="40%"
            withCloseButton={false}
            position="right"
            padding="xl"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-[#36474B]">Add cylinder</h3>
                </div>
                <div className="flex-end">
                    <img
                        src={Close}
                        alt=""
                        className="cursor-pointer"
                        onClick={() => setOpenAddCylinderDrawer(false)}
                    />
                </div>
            </div>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    idCard: "",
                    department: "",
                    dateOfAppointment: "",
                    state: "",
                    role: "",
                    email: "",
                }}
                //validationSchema={userValidationSchema}
                onSubmit={(values) =>
                    console.log(values)
                }
            >
                {() => (
                    <Form className="py-4 mt-10 border-t">
                        <div className="mt-6">
                            <FormControls
                                label="Cylinder Owner"
                                control="input"
                                name="firstName"
                                placeholder="Add Name"
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
                                label="Volume"
                                control="input"
                                name="idCard"
                                placeholder="00KG"
                                classNames={{
                                    mainRoot:
                                        " border-2   border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                        </div>
                        
                        <div className="mt-6">
                            <FormControls
                                label="Add Serial Number"
                                control="input"
                                name="state"
                                placeholder="Serial Number"
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
                                onClick={() => setOpenAddCylinderDrawer(false)}
                                type="button"
                            >
                                Back
                            </Button>

                            <Button
                                variant="blue"
                                className="shadow-[0_15px_40px_#1F6FE342]"
                                type="submit"
                                //disabled={isPending}
                            >
                                Create
                                {/* {isPending ? "Creating..." : "Create"} */}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Drawer>
    )
}

export default AddCylinderDrawer
