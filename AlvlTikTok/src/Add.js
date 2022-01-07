import React from "react";
import db from './Firebase/firebase';

const Add = () => {
    const [value, setValue] = React.useState("");
    const getValue = (event) => {
        setValue(event.target.value);
    };

    const addValue = () => {
        db.collection("questionTest")
            .doc(value)
            .set({
                question: value,
                answer: value,
            })
            .then(function () {
                console.log("Value successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing Value: ", error);
            });
    };

    return (
        <div>
            <input onBlur={getValue} type='text' />
            <button type='button' onClick={addValue}>
                Add
            </button>
        </div>
    );
};

export default Add;