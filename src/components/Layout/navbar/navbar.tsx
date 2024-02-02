import { Input } from "@components/index"
import NotificationIcon from "@assets/icons/notification.svg"
import GasLogo from "@assets/images/gasLogo.png"
import { BiSearch } from "react-icons/bi"
import { AiFillCaretDown } from "react-icons/ai"
import useAuth from "@hooks/auth/useAuth"
import { Popover } from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { useNavigate } from "react-router-dom"

const Navbar = ({ pageTitle }: { pageTitle: string }) => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout().finally(() => {
            showNotification({
                message: "Logged out successully",
            })
        })
        navigate("/signin")
    }
    return (
        <nav className="flex justify-between items-center border-b border-gray-90 py-4 px-16">
            <div className="flex items-center">
                <img src={GasLogo} alt="" width={50} />
                <p className="text-[28px] font-bold ml-4">Pick & Drop</p>
            </div>

            <h3 className="text-blue-100 font-bold">{pageTitle}</h3>
            <Input
                placeholder="Search..."
                className="rounded-[14px] w-[30%] px-2"
                suffixIcon={<BiSearch color="#7F9395" size="20px" />}
            />
            <div className="flex items-center">
                <img src={NotificationIcon} alt="" />

                <div className="flex border-l border-[#C4CFD0] mx-6 pl-10">
                    <div className="flex flex-col">
                        <p className="text-black-60 body-regular font-bold place-self-end">
                            WELCOME
                        </p>
                        <Popover
                            width={200}
                            position="bottom"
                            withArrow
                            shadow="md"
                        >
                            <Popover.Target>
                                <h6 className="font-bold flex items-center cursor-pointer">
                                    John Doe{" "}
                                    <span className="ml-2">
                                        <AiFillCaretDown />
                                    </span>
                                </h6>
                            </Popover.Target>
                            <Popover.Dropdown className="border border-[#1F6FE3]">
                                <p
                                    className="text-[#1F6FE3] cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </p>
                            </Popover.Dropdown>
                        </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
