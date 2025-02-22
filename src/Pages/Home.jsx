// Icon to represent worked hours
// Icon to represent Booked days
// Icon to represent Available days outside booked days.
// Mobile version first.

import { Ri24HoursFill, RiContactsBook3Fill } from "react-icons/ri";
import { MdEventAvailable } from "react-icons/md";

function Home() {
    return (
        <div className="container">
            <div className="sidebar">
            <Ri24HoursFill />
            <RiContactsBook3Fill />
            <MdEventAvailable />
            </div>

            <div className="output">
                <h3>Output of Querry to be displayed here.</h3>
            </div>
            
        </div>
    )
}

export default Home
