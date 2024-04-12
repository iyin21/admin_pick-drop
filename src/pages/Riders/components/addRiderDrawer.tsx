import { Drawer } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import Close from "@assets/icons/close.png"
import { Formik, Form } from "formik"
import { Button, FormControls } from "@components/index"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { type Error } from "../../../types/api"
import { showNotification } from "@mantine/notifications"
import { riderValidationSchema } from "@utils/validationSchema"
import dayjs from "dayjs"
import { createRider } from "@services/riders"
import { useVehicles } from "@hooks/useVehicle"

interface AddRiderProps {
    setOpenAddRiderDrawer: Dispatch<SetStateAction<boolean>>
    openAddRiderDrawer: boolean
}
const AddRiderDrawer = ({
    setOpenAddRiderDrawer,
    openAddRiderDrawer,
}: AddRiderProps) => {
    const queryClient = useQueryClient()

    const { isPending, mutate } = useMutation({
        mutationFn: createRider,
        onSuccess: () => {
            showNotification({
                title: "Success",
                message: "Rider created successfully",
                color: "red",
            })
            queryClient
                .invalidateQueries({ queryKey: ["users"] })
                .finally(() => false)
            setOpenAddRiderDrawer(false)
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

    const { data } = useVehicles({})
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
                    dateOfAppointment: "",
                    state: "",
                    vehicle: "",
                    email: "",
                    phoneNumber: "",
                }}
                validationSchema={riderValidationSchema}
                onSubmit={(values) =>
                    mutate({
                        firstname: values.firstName,
                        lastname: values.lastName,
                        email: values.email,
                        phone: values.phoneNumber,
                        state: values.state,
                        id_number: values.idCard,
                        vehicle_id: values.vehicle,
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
                                name="vehicle"
                                placeholder="Select role"
                                classNames={{
                                    mainRoot:
                                        " border-2  border-gray-100 rounded-[14px] px-6",
                                    input: "text-black-100 text-[22px]",
                                }}
                                labelClassName="text-black-70 text-[22px]"
                            >
                                <option value="" disabled selected hidden>
                                    Select Vehicle
                                </option>
                                {data?.data.items.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.type}
                                    </option>
                                ))}

                                <option value="staff">Staff</option>
                            </FormControls>
                        </div>
                        <div className="mt-6"></div>
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

export default AddRiderDrawer
