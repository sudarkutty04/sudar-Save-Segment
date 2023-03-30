import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "../css/segment.css";

function Home() {
    const [popup, setpop] = useState(false)

    const newschema = () => {
        setpop(!popup);
    };
    const closePopup = () => {
        setpop(false)
    }

    const handleChange = () => {
        var txt = document.getElementById('textvalue');
        var segtext = document.getElementById('addsegment')
        txt.value = segtext.value;
        if (txt.value === segtext.value) {
            document.getElementById("addsegment").value = null;

        }
    };

    const [inputList, setinputList] = useState([{ firstName: '', lastName: '' }]);

    const addinput = () => {
        setinputList([...inputList, { textvalue: "" }])

    }

    const handleDelete = (i) => {
        const deleteVal = [...inputList]
        deleteVal.splice(i, 1)
        setinputList(deleteVal)
    }
    const save = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        setpop(false);
    }

    return (
        <div className="details">
            <button onClick={newschema} className="segment">Save Segment</button>
            <div>
                {popup ?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Save Segment</h1>
                                <button onClick={closePopup}>X</button>
                            </div>
                            <label htmlFor="Segment">Segment Name</label>
                            <input name="name" placeholder="name" required /><br /><br />
                            {
                                inputList.map((val, i) =>
                                    <div id="selected">
                                        <input type="text" id="textvalue" name="textvalue" />
                                        <button onClick={() => handleDelete(i)}>-</button>

                                    </div>
                                )}

                            <select placeholder="Add a segment" id="addsegment" onChange={handleChange} >
                                <option value="" hidden="Add a segment">Add a segment</option>
                                <option label="Firstname" value="Firstname"></option>
                                <option value="Lastname">Lastname</option>
                                <option value="Age">Age</option>
                                <option value="Gender">Gender</option>
                                <option value="AccountName">AccountName</option>
                                <option value="City">City</option>
                                <option value="State">State </option>
                            </select><br />

                            <button onClick={addinput} >Add a Schema</button><br />
                            <button onClick={save}>Save segment</button>
                            <button onClick={closePopup}>Cancel</button>
                        </div>
                    </div> : ""}
            </div>
        </div>
    );



}

export default Home;