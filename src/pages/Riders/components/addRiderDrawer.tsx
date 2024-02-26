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

interface AddRiderProps {
    setOpenAddRiderDrawer: Dispatch<SetStateAction<boolean>>
    openAddRiderDrawer: boolean
}
const AddRiderDrawer = ({
    setOpenAddRiderDrawer,
    openAddRiderDrawer,
}: AddRiderProps) => {
    // const departments = [
    //     "administrator",
    //     "management",
    //     "engineering",
    //     "support",
    //     "accounting",
    //     "legal",
    // ]
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
            opened={openAddRiderDrawer}
            onClose={() => setOpenAddRiderDrawer(false)}
            size="40%"
            withCloseButton={false}
            position="right"
            padding="xl"
        >
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="font-medium text-[#36474B]">Add Rider</h3>
                </div>
                <div className="flex-end">
                    <img
                        src={Close}
                        alt=""
                        className="cursor-pointer"
                        onClick={() => setOpenAddRiderDrawer(false)}
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
                                label="First Name"
                                control="input"
                                name="firstName"
                                placeholder="First name"
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
                                label="Last Name"
                                control="input"
                                name="lastName"
                                placeholder="Last name"
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
                                label="ID Card Number"
                                control="input"
                                name="idCard"
                                placeholder="Enter ID card number"
                                classNames={{
                                    mainRoot:
                                        " border-2   border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                        </div>
                        <FormControls
                                label="Email"
                                control="input"
                                name="email"
                                placeholder="Enter email address"
                                classNames={{
                                    mainRoot:
                                        " border-2   border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                             <FormControls
                                label="Phone Number"
                                control="input"
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                classNames={{
                                    mainRoot:
                                        " border-2   border-gray-100 rounded-[14px] p-6 py-7",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            />
                        
                        
                        <div className="mt-6">
                            <FormControls
                                label="State"
                                control="input"
                                name="state"
                                placeholder="Enter your state"
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
                                label="Assign Vehicle"
                                control="select"
                                name="role"
                                placeholder="Select role"
                                classNames={{
                                    mainRoot:
                                        " border-2  border-gray-100 rounded-[14px] px-6",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            >
                                <option value="" disabled selected hidden>
                                    Select Role
                                </option>

                                <option value="admin">Admin</option>
                                <option value="staff">Staff</option>
                            </FormControls>
                        </div>
                        <div className="mt-6">
                           
                        </div>
                        <div className="flex justify-between mt-14">
                            <Button
                                variant="light-blue"
                                onClick={() => setOpenAddRiderDrawer(false)}
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

export default AddRiderDrawer
