import * as yup from "yup"

export const signinValidationSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Please use a valid email address"),
    password: yup.string().required("Password is required"),
})

export const agentsValidationSchema = yup.object().shape({
    firstName: yup.string().required("First is required"),
    lastName: yup.string().required("Last name is required"),
    companyName: yup.string().required("Password is required"),
    rcNumber: yup.string().required("RC number is required"),
    natureOfBusiness: yup.string().required("Nature of business is required"),
    cacDocument: yup
        .mixed()
        .required("CAC Document is required")
        .test("fileFormat", "Only image files are allowed", (value) => {
            if (value) {
                const supportedFormats = [
                    "jpg",
                    "png",
                    "jpeg",
                    "svg",
                    "pdf",
                    "doc",
                    "docx",
                    "txt",
                ]
                return supportedFormats.includes(
                    // @ts-expect-error
                    value.name.split(".").pop()
                )
            }
            return true
        }),
    companyLogo: yup
        .mixed()
        .required("Company logo is required")
        .test("fileFormat", "Only image files are allowed", (value) => {
            if (value) {
                const supportedFormats = [
                    "jpg",
                    "png",
                    "jpeg",
                    "svg",
                    "pdf",
                    "doc",
                    "docx",
                    "txt",
                ]
                return supportedFormats.includes(
                    // @ts-expect-error
                    value.name.split(".").pop()
                )
            }
            return true
        }),
    TIN: yup.string().required("TIN is required"),
    email: yup
        .string()
        .required("Email is required")
        .email("Please use a valid email address"),
    phone: yup.string().required("Phone number is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    address: yup.string().required("Address is required"),
    termsAndConditions: yup
        .boolean()
        .oneOf([true], "You must accept terms of service and privacy policy"),
})

export const businessValidationSchema = yup.object().shape({
    companyName: yup.string().required("Company name is required"),
    rcNumber: yup.string().required("RC number is required"),
    natureOfBusiness: yup.string().required("Nature of business is required"),
    cacDocument: yup
        .mixed()
        .required("CAC Document is required")
        .test("fileFormat", "Only image files are allowed", (value) => {
            if (value) {
                const supportedFormats = [
                    "jpg",
                    "png",
                    "jpeg",
                    "svg",
                    "pdf",
                    "doc",
                    "docx",
                    "txt",
                ]
                return supportedFormats.includes(
                    // @ts-expect-error
                    value.name.split(".").pop()
                )
            }
            return true
        }),
    companyLogo: yup
        .mixed()
        .required("Company logo is required")
        .test("fileFormat", "Only image files are allowed", (value) => {
            if (value) {
                const supportedFormats = [
                    "jpg",
                    "png",
                    "jpeg",
                    "svg",
                    "pdf",
                    "doc",
                    "docx",
                    "txt",
                ]
                return supportedFormats.includes(
                    // @ts-expect-error
                    value.name.split(".").pop()
                )
            }
            return true
        }),

    email: yup
        .string()
        .required("Email is required")
        .email("Please use a valid email address"),
    phone: yup.string().required("Phone number is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    agent: yup.string().required("Agent is required"),
})

export const individualsValidationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Company name is required"),
    gender: yup.string().required("Gender is required"),

    meterType: yup.string().required("Meter type is required"),
    dob: yup.string().required("Date of birth is required"),

    email: yup
        .string()
        .required("Email is required")
        .email("Please use a valid email address"),
    phone: yup.string().required("Phone number is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    address: yup.string().required("Address is required"),
    agent: yup.string().required("Agent is required"),
})

export const unitGroupValidationSchema = yup.object().shape({
    agent: yup.string().required("Agent is required"),
    groupName: yup.string().required("Group Name is required"),
    groupCategory: yup.string().required("Group Category is required"),
    subscription: yup.string().required("Subscription is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    address: yup.string().required("Address is required"),
})

export const questionnaireValidationSchema = yup.object().shape({
    average: yup.string().required("Average monthly usage is required"),
    package: yup.string().required("Preferred package is required"),
    location: yup.string().required("Location is required"),
    gasPlant: yup.string().required("Closest gas plant is required"),
    dateOfSubscription: yup
        .string()
        .required("Date of subscription is required"),
    accessories: yup
        .array()
        .min(1, "You have to pick at least one accessory.")
        .required("You have to pick at least one accessory."),
})
export const unitGroupQuestionnaireValidationSchema = yup.object().shape({
    prepaidMeter: yup.string().required("Number of Prepaid meters is required"),
    package: yup.string().required("Preferred package is required"),
    location: yup.string().required("Location is required"),
    dateOfSubscription: yup
        .string()
        .required("Date of subscription is required"),
    accessories: yup
        .array()
        .min(1, "You have to pick at least one accessory.")
        .required("You have to pick at least one accessory."),
})

export const inspectionValidationSchema = yup.object().shape({
    inspectionTechnician: yup
        .string()
        .required("Inspection technician is required"),
    kits: yup.string().required("List of kits is required"),
    spacing: yup.string().required("Available spacing is required"),
    recommendation: yup.string().required("Recommendation is required"),
})

export const installationValidationSchema = yup.object().shape({
    installationTechnician: yup
        .string()
        .required("Installation technician is required"),
    report: yup.string().required("Report/note is required"),
    status: yup.string().required("Status is required"),
    date: yup.string().required("Date of completion is required"),
})
export const bankInformationValidationSchema = yup.object().shape({
    bankName: yup.string().required("Bank name is required"),
    accountNumber: yup.string().required("Account number number is required"),
    approval: yup
        .boolean()
        .oneOf(
            [true],
            "You must this to give final approval for the above customer to be deployed"
        ),
})
export const deploymentValidationSchema = yup.object().shape({
    meter: yup.string().required("Meter is required"),
    meterNumber: yup.string().required("Meter number is required"),
    simCardNumber: yup.string().required("Sim card number is required"),
    serialNumber: yup.string().required("Sim card serial number is required"),
    approval: yup
        .boolean()
        .oneOf(
            [true],
            "You must this to give final approval for the above customer to be deployed"
        ),
})
export const levelSensorValidationSchema = yup.object().shape({
    sensorType: yup.string().required("Sensor Type is required"),
    IMEINumber: yup.string().required("IMEI Number is required"),
    simCardNumber: yup.string().required("Sim card number is required"),
    serialNumber: yup.string().required("Sim card serial number is required"),
})

export const unitGroupDeploymentValidationSchema = yup.object().shape({
    approval: yup
        .boolean()
        .oneOf(
            [true],
            "You must this to give final approval for the above customer to be deployed"
        ),
})

export const createUserSchema = yup.object().shape({
    department: yup.string().required("department is required"),
    email: yup.string().required("Email is required"),
    firstName: yup.string().required("First is required"),
    lastName: yup.string().required("Last name is required"),
    role: yup.string().required("Role is required"),
    dateOfSubscription: yup
        .string()
        .required("Date of appointment is required"),
})

export const updateAccountValidationSchema = yup.object().shape({
    bankName: yup.string().required("Bank name is required"),
    accountNumber: yup.string().required("Account number is required"),
})
// export const forgotPasswordValidationSchema = yup.object().shape({
//     phoneNumber: yup.string().required("Phone Number is required"),

// })

// export const confirmEmailAddressSchema = yup.object().shape({
//     code: yup.string().required("OTP is required "),

// })
// export const resetPasswordSchema = yup.object().shape({
//     phoneNumber: yup.string().required("Phone Number is required"),
//     password: yup.string().required("Password is required").min(8, "Password must be a minimum of 8 characters"),
//     confirmPassword: yup
//         .string()
//         .required("Please confirm your password")
//         //@ts-expect-error
//         .oneOf([yup.ref("password"), null], "Password does not match"),

// })

export const userValidationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    idCard: yup.string().required("ID card number is required"),
    department: yup.string().required("Department is required"),
    dateOfAppointment: yup.string().required("Date of appontment is required"),
    state: yup.string().required("State is required"),
    email: yup
        .string()
        .required("Email is required")
        .email("Please use a valid email address"),

    role: yup.string().required("Role is required"),
})
