import { NavLink } from "react-router-dom"
import { routes } from "./utils/route"
import styles from "./sidebar.module.scss"
import User from "@assets/icons/user.png"

const Sidebar=()=>{
    return(
        <div className="bg-[#FCF9F9] px-3 py-6 border-r border-gray-90">
            <div className="flex bg-[#FCF9F9] bg-blue-80 rounded-[10px] p-5 text-[#1F2026]">
                <img src={User} alt="" />
                <div className="ml-4">
                    <h5 className="font-bold">User</h5>
                    <h4>Super Admin</h4>   
                </div>

            </div>
            <div className="mt-4 ">
                {routes?.map((route, index) => (
                    <div
                        className=" text-grey-100 my-1 text-[14px] font-medium"
                        key={index}
                    >
                        <NavLink
                            end
                            to={route?.link}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.active}  flex items-center justify-between gap-4 py-4  w-full text-blue-100 translate-x-3 font-medium `
                                    : `${styles.inactive} hover:bg-[#E3E4E6] hover:px-2 flex items-center py-4 w-full text-[#504B4B] justify-between translate-x-3 font-normal`
                            }
                        >
                            <div className="flex items-center gap-5 w-full">
                                <route.Icon />
                                <h4 className=" font-normal">
                                    {route?.name}
                                </h4>
                            </div>
                        </NavLink>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Sidebar;