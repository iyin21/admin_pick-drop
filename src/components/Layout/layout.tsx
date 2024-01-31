import { LayoutProps } from "../../types/Layout/layout-interface"
import Navbar from "./navbar/navbar"
import Sidebar from "./sidebar/sidebar"

const Layout = ({ children, pageTitle }: LayoutProps) => {
    

    return (
        <div className="h-full bg-[#FCF9F9]">
            <div className="w-full fixed top-0 right-0 z-20 bg-white-100 sm:pb-3 md:pb-0">
                <Navbar pageTitle={pageTitle} />
            </div>
            <div className="relative lg:pl-72 h-screen mt-28">
                <div className=" fixed  left-0 w-70  h-[85%] overflow-y-auto scrollbar">
                    <Sidebar />
                </div>
                
                <main
                    className={`w-full py-6 px-8 pt-6 bg-[#FCF9F9] h-full`}
                >
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
