import { FormControls, Button } from "@components/index"
import { Formik, Form } from "formik"
import useShowPassword from "@utils/useShowPassword"
import { Link } from "react-router-dom"
import Logo from "@assets/images/logo.png"
import { signinValidationSchema } from "@utils/validationSchema"
//import useSignin from "@hooks/auth/useSignin"

const Signin = () => {
    const { showPassword, displayPasswordIcon } = useShowPassword()
    
    //const { mutate, isPending } = useSignin()

    return (
        <div className=" flex w-[100%] p-6">
            <div className="bg-sideBackground w-[60%] bg-no-repeat bg-cover pl-14 rounded-xl h-screen">
                <div className="w-[36%] text-white-100 ">
                <img src={Logo} alt="" className="mt-20 mb-20 w-16" />
                    <h4 className=" mt-10 font-semibold ">
                        Efficiency Meets innovation
                    </h4>
                    <p className="mt-4 text-[14px]">
                        Unlock the power of Digital Gas Solutions
                    </p>
                </div>
            </div>
            <div className="w-[40%] px-16 mt-36">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={signinValidationSchema}
                    onSubmit={(values) =>
                        console.log(values)
                         //mutate(values)
                        }
                >
                    {() => (
                        <Form className="py-4 mt-10">
                            <div className="mb-6">
                                <FormControls
                                    label="Email"
                                    control="input"
                                    name="email"
                                    placeholder="enter your email address"
                                    classNames={{
                                        mainRoot:
                                            " border-b border-x-0 border-t-0 border-black-100 ",
                                        input: "text-[#40540A] text-[12px]",
                                    }}
                                    labelClassName="text-[#000]"
                                />
                            </div>

                            <div className="mb-2">
                                <FormControls
                                    label="Password"
                                    control="input"
                                    name="password"
                                    placeholder="enter your password"
                                    type={showPassword ? "text" : "password"}
                                    suffixIcon={displayPasswordIcon()}
                                    classNames={{
                                        mainRoot:
                                            "  border-b  border-x-0 border-t-0 border-black-100",
                                        input: "text-[#40540A] text-[12px]",
                                    }}
                                />
                            </div>
                            <div className="flex items-center text-2md mt-4">
                                <p>forget password?</p>
                                <Link
                                    to="/"
                                    className="text-blue-100 underline ml-1 "
                                >
                                    click here to reset
                                </Link>
                            </div>

                            <Button
                                variant="blue"
                                className="px-6 text-white-100  w-full rounded-[40px] mt-4"
                                type="submit"
                                //disabled={isPending}
                            >
                                SIGN IN
                                {/* {isPending ? "SIGNING IN..." : "SIGN IN"} */}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Signin
