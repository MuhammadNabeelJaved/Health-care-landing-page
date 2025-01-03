import { nanoid } from 'nanoid'
import doctor1 from "../../assets/doctor-1.png";
import doctor2 from "../../assets/doctor-2.png";
import doctor3 from "../../assets/doctor-3.png";
import doctor4 from "../../assets/doctor-4.png";
import doctor5 from "../../assets/doctor-5.png";
import doctor7 from "../../assets/doctor-7.png";
import doctor8 from "../../assets/doctor-8.png";
import doctor9 from "../../assets/doctor-9.png";


const doctorsData = [
    {
        id: nanoid(10),
        name: "Dr. Sabrina Carpenter",
        title: "Dental Surgency",
        image: doctor1,
    },
    {
        id: nanoid(10),
        name: "Dr. Milla Agustine",
        title: "Dermatologists",
        image: doctor2,
    },
    {
        id: nanoid(10),
        name: "Dr. Kim Mi So",
        title: "Ophthalmologists",
        image: doctor3,
    },
    {
        id: nanoid(10),
        name: "Dr. Jimmy Chairperson",
        title: "Cardiologists",
        image: doctor4,
    },
    {
        id: nanoid(10),
        name: "Dr. Budiono Wong",
        title: "Endocrinologists",
        image: doctor5,
    },
    {
        id: nanoid(10),
        name: "Dr. Jane Smith",
        title: "Dermatologist",
        image: doctor7,
    },
    {
        id: nanoid(10),
        name: "Dr. John Doe",
        title: "Cardiologist",
        image: doctor8,
    },
    {
        id: nanoid(10),
        name: "Dr. Jane Smith",
        title: "Dermatologist",
        image: doctor9,
    }
];

export default doctorsData;