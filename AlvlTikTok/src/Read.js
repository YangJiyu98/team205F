// Import Firestore database
import db from './Firebase/firebase';
import { useState } from 'react';
import { collection, doc, getDocs } from "firebase/firestore"; 
async function Read () {

    const [info, setInfo] = useState([]);

    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDocs(docRef);

    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });

    // Fetch the required data using the get() method
    const Fetchdata = () => {
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }

    // Display the result on the page
    return (
        <div>
            <center>
                <h2>Question</h2>
            </center>

            {
                info.map((data) => (
                    <Frame course={data.answer}
                        name={data.question}
                        age={data.answer} />
                ))
            }
        </div>

    );
}

// Define how each display entry will be structured
const Frame = ({ course, name, age }) => {
    console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">

                <p>NAME : {name}</p>


                <p>Age : {age}</p>


                <p>Course : {course}</p>

            </div>
        </center>
    );
}

export default Read;
