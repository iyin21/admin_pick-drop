import { Layout } from "@components/index"
import TotalStatistics from "./components/totalStatistics"
import DailyRequest from "./components/dailyRequest"
import TopRequest from "./components/topRequest"
import MapTracker from "./components/mapTracker"

// import { useState } from "react"

// import { useQuery } from "@tanstack/react-query"

// import { CgSpinner } from "react-icons/cg"
// import EnergyLogo from "@assets/images/logo.png"

const Dashboard = () => {
    // const { data, isLoading } = useQuery({
    //     queryKey: ["dashboard"],
    //     queryFn: () => fetchDashbaord(),
    // })

    return (
        <>
            <Layout pageTitle="Dashboard">
                <TotalStatistics />

                <div className="flex mt-6 w-[100%]">
                    <div className="w-[35%]">
                        <div>
                            <p className=" text-black-70">
                                Daily Request Overview
                            </p>
                            <DailyRequest />
                        </div>
                        <div className="mt-4">
                            <p className=" text-black-70">
                                Top Request by Volume
                            </p>
                        </div>
                        <TopRequest />
                    </div>

                    <div className="ml-4 w-[65%]">
                        <MapTracker />
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Dashboard
