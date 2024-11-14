import { nanoid } from 'nanoid'
import location from "../../assets/location.png"
import ambulance from "../../assets/ambulance.png"
import medicalProtection from "../../assets/medical-protection.png"
import medicalReport from "../../assets/medical-report.png"
import medicine from "../../assets/medicine.png"

const services = [
    {
        id: nanoid(10),
        title: "Hospital Near by",
        icon: location,
    },
    {
        id: nanoid(10),
        title: "Medical Recipe",
        icon: medicine,
    },
    {
        id: nanoid(10),
        title: "Ambulance Call",
        icon: ambulance,
    },
    {
        id: nanoid(10),
        title: "Specialist Listing",
        icon: medicalReport,
    },
    {
        id: nanoid(10),
        title: "Routine Check Up",
        icon: medicalProtection,
    },

]

export default services