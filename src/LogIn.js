import React from "react";

function Login () {
    return (
        <div>
            <label>Username: </label>
            <input type="text" placeholder="Enter Username" />

            <label>Email: </label>
            <input type="email" placeholder="Enter Email" />

            <button>Submit</button>
        </div>

    );
}