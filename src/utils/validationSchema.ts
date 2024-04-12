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

export const unitGroupDeploymentValidationSchema = yup.object().shape({
    approval: yup
        .boolean()
        .oneOf(
            [true],
            "You must this to give final approval for the above customer to be deployed"
        ),
})

export const productValidationSchema = yup.object().shape({
    productName: yup.string().required("Product name is required"),
    price: yup.string().required("Price is required"),
    productImage: yup.string().required("Product image is required"),
    description: yup.string().required("Description is required"),
})

export const updateAccountValidationSchema = yup.object().shape({
    bankName: yup.string().required("Bank name is required"),
    accountNumber: yup.string().required("Account number is required"),
})
// export const forgotPasswordValidationSchema = yup.object().shape({
//     phoneNumber: yup.string().required("Phone Number is required"),

// })

export const confirmEmailAddressSchema = yup.object().shape({
    code: yup.string().required("OTP is required "),
})
export const cylinderValidationSchema = yup.object().shape({
    //owner_id: yup.string().required("Owner name is required"),
    weight: yup.string().required("Volume is required"),
    dry_weight: yup.string().required("Dry weight is required"),
})

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

export const riderValidationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    idCard: yup.string().required("ID card number is required"),
    dateOfAppointment: yup.string().required("Date of appontment is required"),
    state: yup.string().required("State is required"),
    email: yup
        .string()
        .required("Email is required")
        .email("Please use a valid email address"),
    phoneNumber: yup.string().required("Phone number is required"),
    vehicle: yup.string().required("Role is required"),
})
