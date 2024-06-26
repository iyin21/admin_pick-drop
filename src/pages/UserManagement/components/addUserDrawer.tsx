import { Drawer } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import Close from "@assets/icons/close.png"
import { Formik, Form } from "formik"
import { Button, FormControls } from "@components/index"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type Error } from "../../../types/api"
import { showNotification } from "@mantine/notifications"
import { createStaff } from "@services/users"
import { userValidationSchema } from "@utils/validationSchema"
import dayjs from "dayjs"

interface AddUserProps {
    setOpenAddUserDrawer: Dispatch<SetStateAction<boolean>>
    openAddUserDrawer: boolean
}
const AddUserDrawer = ({
    setOpenAddUserDrawer,
    openAddUserDrawer,
}: AddUserProps) => {
    const departments = [
        "administrator",
        "management",
        "engineering",
        "support",
        "accounting",
        "legal",
    ]
    const queryClient = useQueryClient()

    const { isPending, mutate } = useMutation({
        mutationFn: createStaff,
        onSuccess: () => {
            showNotification({
                title: "Success",
                message: "User created successfully",
                color: "green",
            })
            queryClient
                .invalidateQueries({ queryKey: ["staffs"] })
                .finally(() => false)
            queryClient
                .invalidateQueries({ queryKey: ["users"] })
                .finally(() => false)
            setOpenAddUserDrawer(false)
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

    return (
        <Drawer
            opened={openAddUserDrawer}
            onClose={() => setOpenAddUserDrawer(false)}
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
                        onClick={() => setOpenAddUserDrawer(false)}
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
                validationSchema={userValidationSchema}
                onSubmit={(values) =>
                    mutate({
                        firstname: values.firstName,
                        lastname: values.lastName,
                        department: values.department,
                        email: values.email,
                        id_number: values.idCard,
                        role: values.role,
                        state: values.state,
                        date_of_appointment: dayjs(
                            values.dateOfAppointment
                        ).format("YYYY-MM-DD"),
                    })
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
                        <div className="mt-6">
                            <FormControls
                                label="Department"
                                control="select"
                                name="department"
                                placeholder="Enter department"
                                classNames={{
                                    mainRoot:
                                        " border-2  border-gray-100 rounded-[14px] px-6",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            >
                                <option value="" disabled selected hidden>
                                    Select Department
                                </option>
                                {departments.map((option: string) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </FormControls>
                        </div>
                        <div className="mt-6">
                            <FormControls
                                label="Date of Appointment"
                                control="date"
                                name="dateOfAppointment"
                                placeholder="Select Date"
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
                                label="Role"
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
                            <FormControls
                                label="User Email"
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
                        </div>
                        <div className="flex justify-between mt-14">
                            <Button
                                variant="light-blue"
                                onClick={() => setOpenAddUserDrawer(false)}
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

export default AddUserDrawer
