import { ReactNode } from "react"
import { Dispatch, SetStateAction } from "react";
export interface NavBarInterface {
    pageTitle: string;
    setOpenSideBar: Dispatch<SetStateAction<boolean>>;
    
}

export interface LayoutProps {
    pageTitle: string
    children: ReactNode
    noTopNav?: boolean
    totalNumber?: number
}
