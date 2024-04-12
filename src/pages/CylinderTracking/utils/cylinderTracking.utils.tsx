export const CylinderTracking = [
    {
        serialNumber: "RK-SKID2001",
        volume: "12kg",
        owner: "Rokswood",
        currentLocation: "23 Ring road, Ikeja, Lagos State",
        rider: "Yahaya Ali",
        status: "Drop-off",
    },
    {
        serialNumber: "RK-SKID2002",
        volume: "6kg",
        owner: "Rokswood",
        currentLocation: "23 Ring road, Ikeja, Lagos State",
        rider: "Adebanjo Ike",
        status: "Pick-up",
    },
    {
        serialNumber: "RK-SKID2003",
        volume: "50kg",
        owner: "Ayodeji Ojo",
        currentLocation: "23 Ring road, Ikeja, Lagos State",
        rider: "Yahaya Ali",
        status: "Pick-up",
    },
    {
        serialNumber: "RK-SKID2004",
        volume: "12.5kg",
        owner: "John Doe",
        currentLocation: "23 Ring road, Ikeja, Lagos State",
        rider: "Caleb Ojo",
        status: "Pick-up",
    },
    {
        serialNumber: "RK-SKID2005",
        volume: "12kg",
        owner: "Peter Mike",
        currentLocation: "23 Ring road, Ikeja, Lagos State",
        rider: "John Ade",
        status: "Drop-off",
    },
    {
        serialNumber: "RK-SKID2006",
        volume: "12kg",
        owner: "Rokswood",
        currentLocation: "23 Ring road, Ikeja, Lagos State",
        rider: "Bob Ade",
        status: "Drop-off",
    },
]

export const cylinderStatus = (role: string) => {
    switch (role) {
        case "dropped off":
            return <p className="text-[#FCB20D]">Drop-off</p>
        case "picked up":
            return <p className="text-[#44934D]">Pick-up</p>
        case "untracked":
            return <p className="text-[#44934D]">Untracked</p>

        default:
            return <span>Unknown Role</span>
    }
}
