import { nanoid } from 'nanoid'

// Array of realistic medical facility locations
const locations = [
    "San Francisco, CA",
    "New York City, NY",
    "Boston, MA",
    "Chicago, IL",
    "Seattle, WA",
    "Austin, TX",
    "Denver, CO",
    "Miami, FL",
    "Portland, OR",
    "Atlanta, GA",
    "Minneapolis, MN",
    "Los Angeles, CA",
    "Phoenix, AZ",
    "Houston, TX",
    "Philadelphia, PA",
    "San Diego, CA",
    "Dallas, TX",
    "Charlotte, NC",
    "Nashville, TN",
    "Washington, DC"
];

const reviewsData = [
    {
        id: nanoid(10),
        patient_name: "Sarah J.",
        rating: 5,
        stars: "★★★★★",
        date: "2024-11-10",
        verified: true,
        location: "Boston, MA",
        review: "The staff at Healing Care Institute went above and beyond to make me feel comfortable. Dr. Thompson took the time to thoroughly explain my treatment plan, and the results have been amazing. Highly recommend!"
    },
    // {
    //     id: nanoid(10),
    //     patient_name: "Michael R.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-11-08",
    //     verified: true,
    //     location: "Seattle, WA",
    //     review: "After struggling with chronic back pain for years, the physical therapy team here has given me my life back. The facilities are modern and clean, and every staff member is incredibly professional."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Emily W.",
    //     rating: 4,
    //     stars: "★★★★☆",
    //     date: "2024-11-05",
    //     verified: true,
    //     location: "San Francisco, CA",
    //     review: "Outstanding holistic approach to healthcare. The integration of traditional and alternative medicine really sets them apart. My recovery has been faster than expected."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "David L.",
    //     stars: "★★★★★",
    //     date: "2024-11-01",
    //     verified: true,
    //     location: "Chicago, IL",
    //     review: "The personalized care plan they developed for my rehabilitation was exactly what I needed. The follow-up care has been exceptional, and I'm seeing great improvement."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Patricia M.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-10-28",
    //     verified: true,
    //     location: "Denver, CO",
    //     review: "From the moment I walked in, I knew I was in good hands. The reception staff is welcoming, and the practitioners are true experts in their field. Very impressed with their attention to detail."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Robert K.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-10-25",
    //     verified: true,
    //     location: "Austin, TX",
    //     review: "The Institute's approach to preventive care is refreshing. They don't just treat symptoms but focus on overall wellness. Their health education programs are invaluable."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Jennifer H.",
    //     rating: 4,
    //     stars: "★★★★☆",
    //     date: "2024-10-22",
    //     verified: true,
    //     location: "Miami, FL",
    //     review: "The rehabilitation program here is top-notch. The therapists are patient, knowledgeable, and truly care about your progress. The facility is well-equipped with modern equipment."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Thomas B.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-10-19",
    //     verified: true,
    //     location: "Portland, OR",
    //     review: "I've been to several healthcare facilities, but none compare to the level of care I received here. The staff's dedication to patient well-being is evidennanoid(10)ing they do."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Lisa C.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-10-15",
    //     verified: true,
    //     location: "New York City, NY",
    //     review: "The pain management program has been life-changing. They offered solutions that no other facility had suggested, and the results speak for themselves."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "James P.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-10-12",
    //     verified: true,
    //     location: "Atlanta, GA",
    //     review: "Excellent coordination between different departments. My complex treatment plan was handled seamlessly, and the communication was always clear and prompt."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Mary S.",
    //     rating: 4,
    //     stars: "★★★★☆",
    //     date: "2024-10-08",
    //     verified: true,
    //     location: "Minneapolis, MN",
    //     review: "The wellness programs they offer are comprehensive and effective. I particularly appreciate their emphasis on maintaining good health practices at home."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "William F.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-10-05",
    //     verified: true,
    //     location: "Los Angeles, CA",
    //     review: "Their emergency care service is exceptional. When I needed urgent attention, they were quick to respond and providednanoid(10)effective treatment."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Karen D.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-10-01",
    //     verified: true,
    //     location: "Phoenix, AZ",
    //     review: "The nutritional counseling service has transformed my approach to healthy living. The staff is knowledgeable and providesnanoid(10)sustainable advice."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Richard N.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-09-28",
    //     verified: true,
    //     location: "Houston, TX",
    //     review: "I'm impressed by how they keep up with the latest medical advancements while maintaining a personal touch. The care is both cutting-edge and compassionate."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Susan M.",
    //     rating: 4,
    //     stars: "★★★★☆",
    //     date: "2024-09-25",
    //     verified: true,
    //     location: "Philadelphia, PA",
    //     review: "The pediatric care unit is wonderful. The staff knows exactly how to make children feel comfortable and less anxious about medical procedures."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "George H.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-09-22",
    //     verified: true,
    //     location: "San Diego, CA",
    //     review: "The elderly care services are exceptional. They show great patience and understanding while working with older patients. My mother has shown remarkable improvement."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Nancy W.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-09-19",
    //     verified: true,
    //     location: "Dallas, TX",
    //     review: "Their specialized arthritis treatment program has given me back my mobility. The combination of physical therapy and medication management is perfect."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Charles B.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-09-15",
    //     verified: true,
    //     location: "Charlotte, NC",
    //     review: "The mental health services are outstanding. The therapists are compassionate and professional, and the support groups have been incredibly helpful."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "Betty A.",
    //     rating: 4,
    //     stars: "★★★★☆",
    //     date: "2024-09-12",
    //     verified: true,
    //     location: "Nashville, TN",
    //     review: "I appreciate their flexible scheduling and prompt service. They really understand that time is valuable, and they make every effort to minimize waiting times."
    // },
    // {
    //     id: nanoid(10),
    //     patient_name: "John D.",
    //     rating: 5,
    //     stars: "★★★★★",
    //     date: "2024-09-09",
    //     verified: true,
    //     location: "Washington, DC",
    //     review: "The rehabilitation equipment is state-of-the-art, and the staff is well-trained in using it. They've helped me recover from my sports injury much faster than expected."
    // }
]

export default reviewsData;